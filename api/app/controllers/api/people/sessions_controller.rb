class Api::People::SessionsController < Devise::SessionsController
  # load_and_authorize_resource param_method: :session_params
  skip_before_filter :authenticate_user!, only: [:create]

  def create
    @person = Person.find_by(email: params[:session][:email])
    if !@person.nil? && @person.valid_password?(params[:session][:password])
      sign_in(@person)
      render json: @person, serializer: SessionSerializer
    else
      api_error_response(@person)
    end
  end

  def destroy
    @person = Person.find(params[:id])
    if sign_out(@person)
      render json: @person, serializer: SessionSerializer
    else
      api_error_response(@person)
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
