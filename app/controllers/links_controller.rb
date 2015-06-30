class LinksController < ApplicationController

	def index
		respond_with Link.all
	end
	
	def create
		link = Link.create(post_params)
		link.upvotes = 0
		link.save
		respond_with link
		# respond_with Link.create(post_params)
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
