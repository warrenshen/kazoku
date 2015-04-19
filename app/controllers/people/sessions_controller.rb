class People::SessionsController < Devise::SessionsController
  # before_filter :configure_sign_in_params, only: [:create]
  skip_before_filter :authenticate_person!, only: [:create]

  def create
    @person = Person.find_by(email: params[:session][:email])
    if !@person.nil? && @person.valid_password?(params[:session][:password])
      sign_in(@person)
      render json: person_path(@person)
    else
      render json: login_path
    end
  end

  def destroy
    sign_out(current_person)
    render json: root_path
  end

  # protected

  # def configure_sign_in_params
  #   devise_parameter_sanitizer.for(:sign_in) << :attribute
  # end

end
