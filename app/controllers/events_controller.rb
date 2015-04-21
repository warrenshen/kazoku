class EventsController < ApplicationController

  def index
    @events = Event.all.as_json(include: :family)
  end

end
