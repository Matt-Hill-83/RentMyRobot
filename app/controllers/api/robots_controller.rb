module Api
  class RobotsController < ApiController
    def create
      @robot = Robots.new(robot_params)

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
      @robots = Robot.all
      render json: @robots
    end

    def show
      @robot = Robot.find(params[:id])

      if @robot
        render :show
      else
        render json: ["robot error"], status: 403
      end
    end

    private

    def robot_params
      params.require(:robot).permit(:title)
    end
  end
end
