Rails.application.routes.draw do

  namespace :api, defaults: { format: "json" } do

    get "me", to: "sessions#me"

    devise_for :people,
      skip: [:registrations, :passwords],
      controllers: { sessions: "api/people/sessions" }

    resources :events, only: [:create, :index, :show]

    resources :families, only: [:create, :index, :show] do
      scope module: :families do
        resources :family_events, only: [:index, :show]
      end
    end

    resources :family_events, only: [:create]

    resources :people, only: [:create, :index, :show, :update] do
      collection do
        get "search"
      end
    end
  end

end
