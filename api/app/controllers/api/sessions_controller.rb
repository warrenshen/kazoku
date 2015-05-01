class Api::SessionsController < ApplicationController

  def me
    render json: @current_session
  end

end
