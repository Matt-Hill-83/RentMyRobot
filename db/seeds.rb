def create_robot!(i)
  Robot.create!(
    name: 'robot' + i.to_s,
    manufacturer: 'Roboco',
    image_url: "robot" + i.to_s + ".png",
    lat: rand() * 0.050 + 37.735,
    lng: rand() * 0.050 + -122.482,
  )
end

def create_comment!(robotNumber, commentNumber)
  Comment.create!(
    user_id: 0,
    robot_id: robotNumber,
    title: 'Comment ' + commentNumber.to_s,
    body: 'Body ' + commentNumber.to_s,
  )
end

numRobots = 20
numComments = 5


numRobots.times do |robotNumber|
  create_robot!(robotNumber)

  numComments.times do |commentNumber|
    create_comment!(robotNumber, commentNumber)
  end
end
