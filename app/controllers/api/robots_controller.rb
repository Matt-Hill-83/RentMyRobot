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
      # If slider values and checkbox values are received, perform a filtered query
      if (params['slider_min_value'] &&
          params['slider_min_value'] != "" &&
          params['slider_max_value'] &&
          params['slider_max_value'] != "" &&
          params['filters'])
        slider_min_value = params['slider_min_value']
        slider_max_value = params['slider_max_value']
        robot_types = params['filters']['checkboxes']
        msg = 'all 3'
        @robots = Robot
          .where('price BETWEEN ? AND ?', slider_min_value, slider_max_value)
          .where(robot_type: robot_types)

      # If slider values are recieved, but no checkbox values, return nothing
      elsif (params['slider_min_value'] &&
             params['slider_min_value'] != "" &&
             params['slider_max_value'] &&
             params['slider_max_value'] != "")
        slider_min_value = params['slider_min_value']
        slider_max_value = params['slider_max_value']
        @robots = nil
        msg = 'just sliders'
      #If neither slider values nor checkbox values are sent, return all robots.
      else
        msg = 'all'
        @robots = Robot.all
      end
      # debugger
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
      params.require(:filters).permit!
    end

  end
end
