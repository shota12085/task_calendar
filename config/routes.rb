Rails.application.routes.draw do
  devise_for :users
  root "users#show"
  resources :users, only: [:index, :show, :edit, :update]
  resources :relationships, only: [:create, :destroy]

  resources :groups, only: [:new, :create, :edit, :update, :destroy] do
    resources :events, only: [:index, :create, :show, :edit, :update, :destroy] do
      resources :messages, only: :create
      
      namespace :api do
        resources :messages, only: :index, defaults: { format: 'json'}
      end

    end
  end

end
