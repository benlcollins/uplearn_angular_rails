class CommentsController < ApplicationController

	before_filter :authenticate_user!, only: [:create,:upvote]

	def create
		link = Link.find(params[:link_id])
		comment = link.comments.create(comment_params.merge(user_id: current_user.id))
		# binding.pry
		respond_with link, comment
	end

	def upvote

	end

	private
		def comment_params
			params.require(:comment).permit(:body)
		end
end
