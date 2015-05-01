class Api::EventsController < Api::BaseController
  load_and_authorize_resource param_method: :event_params
  skip_before_filter :authenticate_user!

  def create

  end

  def index
    # TODO: Add each_serializer for events!
    render json: @events
  end

  def show

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
