class EventsController < ApplicationController
  load_and_authorize_resource param_method: :event_params
  skip_before_filter :authenticate_user!

  def index
    @events = Event.all.as_json(include: :families)
  end

  private

  def event_params
    params.require(:event).permit(
      :id,
      :name,
      :description,
      :image_url,
    )
  end

end
