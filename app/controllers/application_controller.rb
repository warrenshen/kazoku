class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session
  before_filter :authenticate_user

  def authenticate_user
    redirect_to login_path unless user_signed_in?
  end

end
