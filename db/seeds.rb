def create_robot!(i)
  Robot.create!(
    name: 'robot' + i.to_s,
    manufacturer: 'Roboco',
    image_url: "robot" + i.to_s + ".png",
    lat: rand() * 0.010 + 37.7822,
    lng: rand() * 0.010 + -122.4167,
  )
end

def create_comment!(i)
  Comment.create!(
    user_id: 1,
    robot_id: 5,
    title: 'Comment ' + i.to_s,
    body: 'Body ' + i.to_s,
  )
end

numRobots = 6
numComments = 5


numRobots.times do |robotNumber|
  create_robot!(robotNumber)

  numComments.times do |commentNumber|
    create_comment!(commentNumber)
  end
end
