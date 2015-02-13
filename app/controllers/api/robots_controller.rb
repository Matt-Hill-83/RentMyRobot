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

      # fixme If I check a box after the slider is set, new slider values don't get sent to
      # controller

      if (params['slider_min_value'] &&
          params['slider_min_value'] != "" &&
          params['slider_max_value'] &&
          params['slider_max_value'] != "" &&
          params['filters'])
        slider_min_value = params['slider_min_value']
        slider_max_value = params['slider_max_value']
        robot_types = params['filters']['checkboxes']
        msg = 'all 3'
        @robots = Robot.where('price BETWEEN ? AND ?', slider_min_value, slider_max_value)

      elsif (params['slider_min_value'] &&
          params['slider_min_value'] != "" &&
          params['slider_max_value'] &&
          params['slider_max_value'] != "")
        slider_min_value = params['slider_min_value']
        slider_max_value = params['slider_max_value']
        @robots = Robot.where('price BETWEEN ? AND ?', slider_min_value, slider_max_value)
        msg = 'jsut 2'

      elsif (params['filters'] &&
             params['filters']['checkboxes'])
        msg = 'only 1'
        robot_types = params['filters']['checkboxes']
        @robots = Robot.where(robot_type: robot_types)

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
      # params.require(:robot).permit(:title, )  {robot: {title: 'my title'}}
      #                                           {filter: {checkboxes: ['']}}
      params.require(:filters).permit!
    end

  end
end
