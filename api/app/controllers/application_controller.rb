class ApplicationController < ActionController::API
  include CanCan::ControllerAdditions
  prepend_before_filter :check_cors_request
  before_filter :authenticate_user!

  respond_to :json

  def localhost_regex
    Regexp.new("^https?:\/\/localhost:3333")
  end

  def check_cors_request
    origin = request.headers["Origin"]
    if origin =~ localhost_regex
      headers["Access-Control-Allow-Origin"] = origin
    end
  end

  def current_person
    current_api_person
  end

  def person_signed_in?
    api_person_signed_in?
  end

  def current_ability
    @current_ability ||= Ability.new(current_person)
  end

  def authenticate_user!
    unauthorized_response unless person_signed_in?
  end

  def api_error_response(object=nil, message=nil, status=400)
    render json: ApiError.new(object, message), status: status
  end

  def unauthorized_response
    api_error_response(message: "Unauthorized", status: 401)
  end

  def not_found_response
    api_error_response(message: "Not found", status: 404)
  end

  rescue_from CanCan::AccessDenied do |exception|
    unauthorized_response
  end

  rescue_from ActiveRecord::RecordNotFound do |exception|
    not_found_response
  end

end
