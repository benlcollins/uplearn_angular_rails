class LinksController < ApplicationController

	before_filter :authenticate_user!, only: [:create,:upvote]

	def index
		respond_with Link.all
	end
	
	def create
		link = Link.create(post_params.merge(user_id: current_user.id))
		link.upvotes = 0
		link.save
		respond_with link
	end

	def show
		link = Link.find(params[:id])
		# debugger
		respond_with link
	end

	def upvote
		link = Link.find(params[:id])
		link.upvotes += 1
		link.save
		respond_with link
	end

	private

		def post_params
			params.require(:link).permit(:title, :body, :url)
		end
end
