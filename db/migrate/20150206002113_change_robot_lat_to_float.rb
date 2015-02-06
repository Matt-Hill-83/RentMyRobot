class ChangeRobotLatToFloat < ActiveRecord::Migration
  def change

    change_column(:robots, :lat, :float)
  end
end
