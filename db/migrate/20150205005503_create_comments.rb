class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :robot_id, null: false
      t.integer :title, null: false
      t.integer :body, null: false

      t.timestamps
    end
  end
end
