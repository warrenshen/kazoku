class Api::FamiliesController < Api::BaseController
  load_and_authorize_resource param_method: :family_params
  skip_before_filter :authenticate_person!, only: [:index, :show]

  def create
    if @family.save
      current_person.update(family_id: @family.id)
      render json: @family, serializer: FamilySerializer
    else
      api_error_response(@family)
    end
  end

  def index
    render json: @families, each_serializer: FamilySerializer
  end

  def show
    render json: @family, serializer: FamilySerializer
  end

  private

  def family_params
    params.require(:family).permit(
      :id,
      :name,
    )
  end

end
