class ChangeDescriptionTextToText < ActiveRecord::Migration
  def change
    change_column(:comments, :body, :text)
    change_column(:robots, :description, :text)


  end
end
