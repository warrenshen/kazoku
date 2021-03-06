class Api::Families::FamilyEventsController < Api::BaseController
  load_and_authorize_resource param_method: :family_event_params
  skip_before_filter :authenticate_person!, only: [:index]

  def index

  end

  def show
  end

  private

  def family_event_params
    params.require(:family_event).permit(
      :id,
      :family_id,
      :event_id,
    )
  end

end
