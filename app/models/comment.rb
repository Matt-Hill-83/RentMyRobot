class Comment < ActiveRecord::Base
  belongs_to(
    :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"
)

  belongs_to(
    :robot,
    primary_key: :id,
    foreign_key: :robot_id,
    class_name: "Robot"
)

end
