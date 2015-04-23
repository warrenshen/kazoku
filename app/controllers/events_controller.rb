class EventsController < ApplicationController
  load_and_authorize_resource only: [:index]
  skip_before_filter :authenticate_user!

  def index
    @events = Event.all.as_json(include: :families)
  end

end
