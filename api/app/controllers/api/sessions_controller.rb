class Api::SessionsController < Api::BaseController
  skip_before_filter :authenticate_user!

  def me
    render json: current_session
  end

end
