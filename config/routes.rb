Rails.application.routes.draw do

  devise_for :users
  root to: 'angular#angular'

  resources :links, only: [:create, :index, :show] do
  	resources :comments, only: [:show, :create] do
  		member do
  			put '/upvote' => 'comments#upvote'
  		end
  	end

  	member do
  		put '/upvote' => 'links#upvote'
  	end
  end

end
