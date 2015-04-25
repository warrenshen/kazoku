class UsersController < ApplicationController
  load_and_authorize_resource param_method: :user_params, except: [:search]
  skip_before_filter :authenticate_user!, except: [:update]

  def create
    if @user.save
      sign_in(:user, @user)
      render json: @user
    else
      api_error_response(@user)
    end
  end

  def index
    @users = User.all
  end

  def search
    render json: User.search(params[:q])
  end

  def show
    @user = User.find(params[:id]).as_json(include: :family)
  end

  def update
    if @user.update_attributes(family_id: params[:user][:family_id])
      render json: @user
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
