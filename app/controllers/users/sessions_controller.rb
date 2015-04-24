class Users::SessionsController < Devise::SessionsController
  # load_and_authorize_resource param_method: :session_params
  skip_before_filter :authenticate_user!, only: [:create]

  def create
    @user = User.find_by(email: params[:session][:email])
    if !@user.nil? && @user.valid_password?(params[:session][:password])
      sign_in(@user)
      render json: user_path(@user)
    else
      render json: login_path
    end
  end

  def destroy
    sign_out(current_user)
    render json: root_path
  end

  private

  def session_params
    params.require(:session).permit(
      :email,
      :password,
    )
  end

end
