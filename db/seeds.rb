def create_robot!(i)
  names = %w(Google
                  Festo
                  Honda
                  Google
                  Google
                  iRobot
                  Robotix
                  Honda
                  Google
                  iRobot
                  Robotix
                  Honda
                  Google
                  iRobot
                  Robotix
                  Honda)

  manufacturers = %w(Google
                  Festo
                  Honda
                  Google
                  Google
                  iRobot
                  Robotix
                  Honda
                  Boston_Dynamics
                  iRobot
                  Robotix
                  Honda
                  Boston_Dynamics
                  iRobot
                  Robotix
                  Honda)


  video_urls = %w(wE3fmFTtP9g
                  chPanW0QWhA
                  wE3fmFTtP9g
                  chPanW0QWhA)

  image_urls = %w(big-dog
                  RobotBird
                  aa-aisimo
                  aa-cheetah
                  aa-flea
                  aa-honda-lawn
                  aa-mars
                  aa-ping-pong
                  aa-honda-lawn
                  aa-mars
                  aa-ping-pong
                  aa-snake1
                  aa-water-snake
                  aa-honda-lawn
                  aa-mars
                  aa-ping-pong)
  comment_text = "This is a fantastic robot.  We took it out for a test on Saturday and had a ball!"
  description_text = "This robot has been designed to handle all your robotic needs.  No task is too small."

  Robot.create!(
    name: names[i%(names.length-1)],
    manufacturer: manufacturers[i%(manufacturers.length-1)],
    video_url: video_urls[i%(video_urls.length-1)],
    image_url: image_urls[i]  + ".png",
    # image_url: image_urls[i%(image_urls.length-1)]  + ".png",
    lat: rand() * 0.050 + 37.735,
    lng: rand() * 0.050 + -122.482,
    price: rand() * 1000 + 1000,
    description: description_text,
    robot_type: %w(Industrial
                   Consumer
                   Research
                   Military
                  Industrial
                   Consumer
                   Research
                   Military
                  Industrial
                   Consumer
                   Research
                   Military
                   Humanoid
                   Aerial
                   Space
                   Medical).sample,
  )
end

def create_comment!(robotNumber, commentNumber)
  comment_text = "This is a fantastic robot.  We took it out for a test on Saturday and had a ball!"
  description_text = "This robot has been designed to handle all your robotic needs.  No task is too small."
  Comment.create!(
    user_id: 0,
    robot_id: robotNumber,
    title: 'Comment ' + commentNumber.to_s,
    body: comment_text,
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
