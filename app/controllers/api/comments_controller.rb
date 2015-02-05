module Api
  class CommentsController < ApiController
    def create
      @comment = Comments.new(comment_params)

      if @comment.save
        render json: @comment
      else
        render json: @comment.errors.full_messages, status: :unprocessable_entity
      end
    end

    # def destroy
    #   @comment = current_user.comments.find(params[:id])
    #   @comment.try(:destroy)
    #   render json: {}
    # end

    def index
      @comments = Comment.all
      render json: @comments
    end

    def show
      @comment = Comment.find(params[:id])

      if @comment
        render :show
      else
        render json: ["comment error"], status: 403
      end
    end

    private

    def comment_params
      params.require(:comment).permit(:title)
    end
  end
end
