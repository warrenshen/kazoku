class UsersController < ApplicationController
  load_resource param_method: :user_params, only: [:create, :update]
  skip_before_filter :authenticate_user!, except: [:update]

  def create
    if @user.save
      sign_in(:user, @user)
      render json: user_path(@user)
    else
      render json: root_path
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id]).as_json(include: :family)
  end

  def update
    if @user.update_attributes(family_id: params[:user][:family_id])
      render json: family_path(@user.family)
    else
      render json: root_path
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
