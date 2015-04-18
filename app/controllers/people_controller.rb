class PeopleController < ApplicationController
  load_and_authorize_resource param_method: :person_params, only: [:create]

  def index
    @people = Person.all
  end

  def show
    @person = Person.find(params[:id])
  end

  def create
    if @person.save
      sign_in(@person)
      redirect_to person_path(@person)
    else
      redirect_to root_path
    end
  end

  private

  def person_params
    params.require(:person).permit(
      :first_name,
      :last_name,
      :email,
      :password,
    )
  end

end
