class Api::PeopleController < Api::BaseController
  load_and_authorize_resource param_method: :person_params, except: [:search]
  skip_before_filter :authenticate_person!, except: [:update]

  def create
    if @person.save
      sign_in(@person)
      # Special serializer that includes the person's auth_token.
      render json: @person, serializer: AuthorizedSerializer
    else
      api_error_response(@person)
    end
  end

  def index
    render json: @people, each_serializer: PersonSerializer
  end

  def search
    people = Person.search(params[:q])
    render json: people, each_serializer: PersonSerializer
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
