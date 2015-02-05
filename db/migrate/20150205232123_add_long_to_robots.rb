class AddLongToRobots < ActiveRecord::Migration
  def change
    add_column :robots, :long, :integer
  end
end
