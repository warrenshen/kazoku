class PeopleController < ApplicationController
  load_and_authorize_resource param_method: :person_params, only: [:create]

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
    @person = Person.find(params[:id])
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
    )
  end

end
