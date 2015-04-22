class UserController < ApplicationController
  # load_and_authorize_resource param_method: :person_params, only: [:create, :update]

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
    @users = User.find(params[:id]).as_json(include: :family)
  end

  def update
    if @user.update_attributes(family_id: params[:user][:family_id])
      render json: family_path(@user.family)
    else
      render json: root_path
    end
  end

  private

  def person_params
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
