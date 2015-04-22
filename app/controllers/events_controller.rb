class EventsController < ApplicationController
  load_and_authorize_resource only: [:index]

  def index
    @events = Event.all.as_json(include: :family)
  end

end
