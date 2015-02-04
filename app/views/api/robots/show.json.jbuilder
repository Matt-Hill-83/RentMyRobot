json.extract! @robot, :id,
                      :name,
                      :manufacturer,
                      :location,
                      :image_url,
                      :video_url,
                      :created_at,
                      :updated_at

# json.members @robot.members do |member|
#   json.id member.id
#   json.email member.email
#   json.gravatar_url member.gravatar_url
# end
#
# json.lists @robot.lists do |list|
#   json.extract! list, :id, :title, :ord, :created_at, :updated_at
#
#   json.cards list.cards do |card|
#     json.extract! card, :id, :title, :ord, :created_at, :updated_at
#   end
# end
