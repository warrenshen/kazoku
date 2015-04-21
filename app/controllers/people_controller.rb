class PeopleController < ApplicationController
  load_and_authorize_resource param_method: :person_params, only: [:create, :update]

  def create
    if @person.save
      sign_in(:person, @person)
      render json: person_path(@person)
    else
      render json: root_path
    end
  end

  def index
    @people = Person.all
  end

  def show
    @person = Person.find(params[:id]).as_json(include: :family)
  end

  def update
    if @person.update_attributes(family_id: params[:person][:family_id])
      render json: family_path(@person.family)
    else
      render json: root_path
    end
  end

  private

  def person_params
    params.require(:person).permit(
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
