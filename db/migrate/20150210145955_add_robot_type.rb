class AddRobotType < ActiveRecord::Migration
  def change
    add_column :robots, :robot_type, :string
  end
end
