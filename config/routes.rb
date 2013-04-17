Velocilink::Application.routes.draw do
  get "home/index"

  get "imgur/index"

  devise_for :users

  root to: "home#index"
end
