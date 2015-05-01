class Api::SessionsController < Api::BaseController
  skip_before_filter :authenticate_user!

  def me
    current_session_response
  end

end
