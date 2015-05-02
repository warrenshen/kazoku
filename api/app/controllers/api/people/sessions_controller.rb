class Api::People::SessionsController < Api::BaseController
  skip_before_filter :authenticate_person!, only: [:create]

  def create
    person = Person.find_by(email: params[:session][:email])
    if !person.nil? && person.valid_password?(params[:session][:password])
      sign_in(person)
      current_session_response
    else
      api_error_response(person)
    end
  end

  def destroy
    if !@current_session.nil?
      sign_out(@current_session.person)
      @current_session.update(is_expired: true)
      current_session_response
    else
      api_error_response()
    end
  end

  private

  def session_params
    params.require(:session).permit(
      :email,
      :password,
    )
  end

end
