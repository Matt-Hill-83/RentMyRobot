class AddLatToRobots < ActiveRecord::Migration
  def change
    add_column :robots, :lat, :integer
  end
end
