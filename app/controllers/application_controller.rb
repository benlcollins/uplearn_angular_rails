class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :json

  before_action :configure_permitted_parameters, if: :devise_controller?

  # def angular
  # 	render 'layouts/application'
  # end

  # grab the current_user's gravatar
  def current_user_gravatar
    hash = Digest::MD5.hexdigest(current_user.email)
    @image_src = "http://www.gravatar.com/avatar/#{hash}"
  end

  private

  	def configure_permitted_parameters
  		devise_parameter_sanitizer.for(:sign_up) << :username
  	end

end
