module Api
  class RobotsController < ApiController
    def create
      @robot = current_user.robots.new(robot_params)

      if @robot.save
        render json: @robot
      else
        render json: @robot.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @robot = current_user.robots.find(params[:id])
      @robot.try(:destroy)
      render json: {}
    end

    def index
      @robots = current_user.robots
      render json: @robots
    end

    def show
      @robot = Robot.includes(:members, lists: :cards).find(params[:id])

      if @robot.is_member?(current_user)
        render :show
      else
        render json: ["You aren't a member of this robot"], status: 403
      end
    end

    private

    def robot_params
      params.require(:robot).permit(:title)
    end
  end
end
