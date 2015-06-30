class CommentsController < ApplicationController

	def create
		link = Link.find(params[:link_id])
		comment = link.comments.create(comment_params)
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
