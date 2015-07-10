Rails.application.routes.draw do

  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)
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
      put '/downvote' => 'links#downvote'
  	end
  end

end
