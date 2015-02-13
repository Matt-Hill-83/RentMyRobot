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
                  chPanW0QWhA
                  wE3fmFTtP9g
                  chPanW0QWhA)
  image_urls = %w(
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
                )
  lorem_text = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

  Robot.create!(
    name: names[i%(names.length-1)],
    manufacturer: manufacturers[i%(manufacturers.length-1)],
    video_url: video_urls[i%(video_urls.length-1)],
    image_url: image_urls[i]  + ".png",
    # image_url: image_urls[i%(image_urls.length-1)]  + ".png",
    lat: rand() * 0.050 + 37.735,
    lng: rand() * 0.050 + -122.482,
    price: rand() * 1000 + 1000,
    description: lorem_text,
    robot_type: %w(Industrial
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
  lorem_text = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  Comment.create!(
    user_id: 0,
    robot_id: robotNumber,
    title: 'Comment ' + commentNumber.to_s,
    body: lorem_text,
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
