json.extract! @robot, :id,
                      :name,
                      :manufacturer,
                      :location,
                      :image_url,
                      :video_url,
                      :created_at,
                      :comments,
                      :updated_at

# json.comments @robot.comments do |comment|
#   json.id comment.id
#   json.user_id comment.user_id
#   json.title comment.title
#   json.body comment.body
# end
#
# json.comments @robot.comments do |comment|
#   json.extract! comment, :id, :title, :body, :created_at, :updated_at
#
#   # json.cards comment.cards do |card|
#   #   json.extract! card, :id, :title, :ord, :created_at, :updated_at
#   # end
# end
