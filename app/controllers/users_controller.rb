class UsersController < ApplicationController
  load_and_authorize_resource param_method: :user_params, except: [:search]
  skip_before_filter :authenticate_user!, except: [:update]

  def create
    if @user.save
      sign_in(:user, @user)
      render json: @user, serializer: UserSerializer
    else
      api_error_response(@user)
    end
  end

  def index
    render json: @users, each_serializer: UserSerializer
  end

  def search
    @users = User.search(params[:q])
    render json: @users, each_serializer: UserSerializer
  end

  def show
    render json: @user, serializer: UserSerializer
  end

  def update
    if @user.update(family_id: params[:user][:family_id])
      render json: @user, serializer: UserSerializer
    else
      api_error_response(@user)
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :id,
      :first_name,
      :last_name,
      :email,
      :password,
      :image_url,
      :family_id,
    )
  end

end
