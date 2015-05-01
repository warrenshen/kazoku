class ApplicationController < ActionController::API
  include CanCan::ControllerAdditions

  def current_ability
    @current_ability ||= Ability.new(current_person)
  end

  ##################################################
  # Responses
  ##################################################
  def api_error_response(object=nil, message=nil, status=400)
    render json: ApiError.new(object, message), status: status
  end

  def unauthorized_response
    api_error_response(message: "Unauthorized", status: 401)
  end

  def not_found_response
    api_error_response(message: "Not found", status: 404)
  end

  ##################################################
  # Rescues
  ##################################################
  rescue_from CanCan::AccessDenied do |exception|
    unauthorized_response
  end

  rescue_from ActiveRecord::RecordNotFound do |exception|
    not_found_response
  end

end
