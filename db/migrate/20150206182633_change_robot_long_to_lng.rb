class ChangeRobotLongToLng < ActiveRecord::Migration
  def change
    rename_column :robots, :long, :lng
  end
end
