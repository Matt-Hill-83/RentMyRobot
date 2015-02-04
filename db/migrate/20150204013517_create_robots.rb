class CreateRobots < ActiveRecord::Migration
  def change
    create_table :robots do |t|
      t.string :name, null: false
      t.string :manufacturer
      t.string :description
      t.string :location
      t.string :image_url
      t.string :video_url

      t.timestamps
    end

    ##fixme add index here 
  end
end
