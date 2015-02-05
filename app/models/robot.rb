class Robot < ActiveRecord::Base
  has_many(
    :comments,
    primary_key: :id,
    foreign_key: :robot_id,
    class_name: "Comment"
  )
end
