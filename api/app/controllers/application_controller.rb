class ApplicationController < ActionController::API
  before_filter :authenticate_user!

  def authenticate_user!
    redirect_to login_path unless user_signed_in?
  end

  def api_error_response(object=nil, message=nil, status=400)
    render json: ApiError.new(object, message), status: status
  end

  rescue_from CanCan::AccessDenied do |exception|
    redirect_to root_url
  end

end
