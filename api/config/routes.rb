Rails.application.routes.draw do

  namespace :api, defaults: { format: "json" } do

    devise_for :users,
      skip: [:registrations, :passwords],
      controllers: { sessions: "api/users/sessions" }

    resources :events, only: [:create, :index, :show]

    resources :families, only: [:create, :index, :show] do
      scope module: :families do
        resources :family_events, only: [:index, :show]
      end
    end

    resources :family_events, only: [:create]

    resources :users, only: [:create, :index, :show, :update] do
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
