class AddPriceToRobotModel < ActiveRecord::Migration
  def change
    add_column :robots, :price, :integer
  end
end
