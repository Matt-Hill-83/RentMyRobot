def create_robot!(i)
  names = %w(Big_Dog
                  Little_Dog
                  Cheetah
                  Roomba
                  Reaper
                  Mars Rover
                  Flea
                  Porpoise)

  manufacturers = %w(Mechatron
                  Boston_Dynamics
                  Google
                  Industrial_Perception
                  Kuka
                  iRobot
                  Robotix
                  Honda)

  video_urls = %w(wE3fmFTtP9g
                chPanW0QWhA)

  Robot.create!(
    name: names[i%(names.length-1)],
    manufacturer: manufacturers[i%(manufacturers.length-1)],
    video_url: video_urls[i%(video_urls.length-1)],
    image_url: "robot" + i.to_s + ".png",
    lat: rand() * 0.050 + 37.735,
    lng: rand() * 0.050 + -122.482,
    price: rand() * 1000 + 1000,
    robot_type: %w('industrial'
                  'consumer'
                  'research'
                  'military'
                  'humanoid'
                  'aerial'
                  'other1'
                  'other2').sample,
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
