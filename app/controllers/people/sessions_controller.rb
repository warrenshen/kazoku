class People::SessionsController < Devise::SessionsController
  # before_filter :configure_sign_in_params, only: [:create]
  skip_before_filter :authenticate_person!, only: [:create]

  def create
    puts params
    @person = Person.find_by(email: params[:session][:email])
    if !@person.nil? && @person.valid_password?(params[:session][:password])
      sign_in(@person)
      render json: person_path(@person)
    else
      render json: login_path
    end
  end

  def destroy
    super
  end

  # protected

  # def configure_sign_in_params
  #   devise_parameter_sanitizer.for(:sign_in) << :attribute
  # end

end


# class Api::V1::Admins::SessionsController < Api::V1::Admins::BaseController
#   skip_before_filter :authenticate_api_v1_admin!, only: [:create]

#   def create
#     if AuthenticationService.sign_in(self, :admin, params, Admin)
#       current_session_response
#     else
#       invalid_login_response
#     end
#   end

#   def destroy
#     if AuthenticationService.sign_out(self, :admin, params, Admin)
#       current_session_response
#     else
#       # Not sure what to do about a failed sign out.
#       unauthorized_response
#     end
#   end

# end


# #
# # Our abstraction for signing in a "user". A "user" is either a:
# # Student, Instructor, Admin, or Contractor
# #
# # This services handles looking up "users" by email and signing
# # them in. It also handles Facebook authentication for all entities.
# #
# class AuthenticationService < Service

#   def self.sign_in(controller, type, params, model)
#     #
#     # Attempts to find a "user" based on the email. This method returns a boolean
#     # describing whether or not the login attempt was successful. It is up to the
#     # controller to decide what to do.
#     #

#     user_params = params[type] || {}
#     email = Email.find_by(email: user_params[:email])
#     user = email.try(:emailable)

#     return false if user.nil?

#     if user.valid_password?(user_params[:password])
#       # Call the devise sign_in method to store the object.
#       controller.sign_in(user)
#       user.ensure_authentication_token
#       return true
#     else
#       return false
#     end
#   end

#   def self.sign_out(controller, type, params, model)
#     #
#     # Attempts to sign out the currently logged in "user".
#     #

#     signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(type))

#     if controller.has_current_session?
#       controller.current_session.expire
#     end

#     # For now, always return a true. Not sure what to do about a failed sign out.
#     return true
#   end

# end
