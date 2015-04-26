class Users::SessionsController < Devise::SessionsController
  # load_and_authorize_resource param_method: :session_params
  skip_before_filter :authenticate_user!, only: [:create]

  def create
    @user = User.find_by(email: params[:session][:email])
    if !@user.nil? && @user.valid_password?(params[:session][:password])
      sign_in(@user)
      render json: @user
    else
      api_error_response(@user)
    end
  end

  def destroy
    @user = User.find(params[:id])
    if sign_out(@user)
      render json: @user
    else
      render api_error_response(current_user)
    end
  end

  private

  def session_params
    params.require(:session).permit(
      :email,
      :password,
    )
  end

end
