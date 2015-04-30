class Api::PeopleController < ApplicationController
  load_and_authorize_resource param_method: :person_params, except: [:me, :search]
  skip_before_filter :authenticate_user!, except: [:update]

  def create
    if @person.save
      sign_in(@person)
      render json: @person, serializer: PersonSerializer
    else
      api_error_response(@person)
    end
  end

  def index
    render json: @people, each_serializer: PersonSerializer
  end

  def me
    render json: current_person, serializer: SessionSerializer
  end

  def search
    @people = Person.search(params[:q])
    render json: @people, each_serializer: PersonSerializer
  end

  def show
    render json: @person, serializer: PersonSerializer
  end

  def update
    if @person.update(family_id: params[:person][:family_id])
      render json: @person, serializer: PersonSerializer
    else
      api_error_response(@person)
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
