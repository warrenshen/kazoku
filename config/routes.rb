Rails.application.routes.draw do

  root "pages#home"
  get "login" => "pages#login"
  get "signup" => "pages#signup"

  devise_for :users,
    skip: [:registrations, :passwords],
    controllers: { sessions: "users/sessions" }

  resources :events, only: [:index, :show]

  resources :families, only: [:create, :index, :new, :show] do
    resources :family_events, only: [:create, :index, :show]
  end

  resources :users, only: [:create, :index, :show, :update]

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

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
