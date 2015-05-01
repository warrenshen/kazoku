class Api::BaseController < ApplicationController
  # Parses request headers into params
  before_filter :parse_headers
  # Authenticates person from auth_email and auth_token
  before_filter :authenticate_person_from_credentials
  # Authenticates session from auth_session_uuid
  before_filter :authenticate_session_from_uuid
  # Prevents actions by unauthenticated people (skip when necessary)
  before_filter :authenticate_person!

  respond_to :json

  def current_person
    current_api_person
  end

  def authenticate_person!
    unauthorized_response unless person_signed_in?
  end

  def person_signed_in?
    api_person_signed_in?
  end

  def authenticate_person_from_credentials
    auth_email = params[:auth_email].presence
    auth_token = params[:auth_token].presence
    puts auth_email
    puts auth_token
    person = Person.find_by(email: auth_email)
    # Devise.secure_compare mitigates timing attacks.
    if person && Devise.secure_compare(person.auth_token, auth_token)
      # Authentication required every request due to `store:false`.
      sign_in(person, store: false)
    end
  end

  def authenticate_session_from_uuid
    uuid    = params[:session_uuid].presence
    session = Session.find_by(uuid: uuid)
    @current_session = session
  end

  def current_session
    SessionManager.new(@current_session, current_person).current
  end

  def current_session_response
    session = current_session
    render json: session, serializer: SessionSerializer
  end

  private

  def parse_headers
    parse_header(:auth_token, "X-AUTH-TOKEN")
    parse_header(:auth_email, "X-AUTH-EMAIL")
    parse_header(:session_uuid, "X-SESSION-UUID")
  end

  def parse_header(header_param, header_name)
    current = params[header_param]
    if current.blank?
      params[header_param] = request.headers[header_name]
    end
  end

end
