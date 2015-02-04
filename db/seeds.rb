def create_robot!(i)
  Robot.create!(
    name: 'robot' + i.to_s,
    manufacturer: 'Roboco',
    image_url: "robot" + i.to_s + ".png"

    # image_url: %w(
    #   http://placekitten.com/200/300?image=1
    #   http://placekitten.com/200/300?image=2
    #   http://placekitten.com/200/300?image=3
    #   http://placekitten.com/200/300?image=4
    #   http://placekitten.com/200/300?image=5
    #   http://placekitten.com/200/300?image=6
    #   http://placekitten.com/200/300?image=7
    #   http://placekitten.com/200/300?image=8
    #   http://placekitten.com/200/300?image=9
    #   http://placekitten.com/200/300?image=10
    #   http://placekitten.com/200/300?image=11
    #   http://placekitten.com/200/300?image=12
    #   http://placekitten.com/200/300?image=13
    #   http://placekitten.com/200/300?image=14
    #   http://placekitten.com/200/300?image=15
    #   http://placekitten.com/200/300?image=16
    # ).sample
  )
end

6.times do |i|
  create_robot!(i)
end
