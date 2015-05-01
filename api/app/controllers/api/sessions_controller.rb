class Api::SessionsController < Api::BaseController
  # skip_before_filter :authenticate_person!

  def me
    current_session_response
  end

end
