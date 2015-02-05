def create_robot!(i)
  Robot.create!(
    name: 'robot' + i.to_s,
    manufacturer: 'Roboco',
    image_url: "robot" + i.to_s + ".png"
  )
end

def create_comment!(i)
  Comment.create!(
    user_id: 1,
    robot_id: 5,
    title: 'Title',
    body: "Body"
  )
end



6.times do |i|
  create_robot!(i)
end

6.times do |i|
  create_comment!(i)
end
