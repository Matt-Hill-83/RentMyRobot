class RobotsController < ApplicationController
  before_filter :require_signed_in!

  def index
    @robots = Robot.all
  end

  def show
    @robot = Robot.find(params[:id])
    debugger
  end

  def new
    @robot = Robot.new
  end

  def create
    @robot = Robot.new(robot_params)
    @robot.user_id = current_user.id
    if @robot.save
      redirect_to robot_url(@robot)
    else
      flash.now[:errors] = @robot.errors.full_messages
      render :new
    end
  end

  def edit
    @robot = Robot.find(params[:id])
  end

  def update
    @robot = Robot.find(params[:id])
    if @robot.update_attributes(robot_params)
      redirect_to robot_url(@robot)
    else
      flash.now[:errors] = @robot.errors.full_messages
      render :edit
    end
  end

  def destroy
    robot = Robot.find(params[:id])
    robot.destroy
    redirect_to robots_url
  end

  private
  def robot_params
    params.require(:robot).permit(:title, :url)
  end
end
