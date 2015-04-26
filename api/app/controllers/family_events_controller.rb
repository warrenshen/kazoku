class FamilyEventsController < ApplicationController
  load_and_authorize_resource param_method: :family_event_params

  def create
    if @family_event.save
      render json: @family_event
    else
      api_error_response(@family_event)
    end
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
