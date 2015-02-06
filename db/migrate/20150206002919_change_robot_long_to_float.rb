class ChangeRobotLongToFloat < ActiveRecord::Migration
  def change
    change_column(:robots, :long, :float)
    change_column(:comments, :title, :string)
    change_column(:comments, :body, :string)
  end
end
