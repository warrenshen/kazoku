class PeopleController < ApplicationController
  load_resource param_method: :person_params, only: [:create]

  def index
    @people = Person.all
  end

  def show
    @person = Person.find(params[:id])
  end

  def create
    if @person.save
      sign_in(@person)
    else
      puts "error error error"
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
    )
  end

end
