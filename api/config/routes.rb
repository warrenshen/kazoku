Rails.application.routes.draw do

  namespace :api, defaults: { format: "json" } do

    devise_for :users,
      skip: [:registrations, :passwords],
      controllers: { sessions: "api/users/sessions" }

    resources :events, only: [:create]

    resources :families, only: [:create]

    resources :family_events, only: [:create]

    resources :users, only: [:create, :update] do
      collection do
        get "search"
      end
    end
  end

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

end
