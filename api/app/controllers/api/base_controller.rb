class Api::BaseController < ApplicationController
  before_filter :parse_headers
  before_filter :authenticate_user!
  before_filter :authenticate_session_from_uuid

  respond_to :json

  def authenticate_user!
    unauthorized_response unless person_signed_in?
  end

  def current_person
    current_api_person
  end

  def person_signed_in?
    api_person_signed_in?
  end

  def authenticate_session_from_uuid
    uuid    = params[:session_uuid].presence
    session = Session.find_by(uuid: uuid)
    @current_session = session
  end

  def has_current_session?
    !@current_session.nil
  end

  def current_session
    SessionManager.new(self, @current_session, current_person)
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
