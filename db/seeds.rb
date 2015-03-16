require 'csv'

csv_data = CSV.read 'robot_seed_data.csv'
headers = csv_data.shift.map {|i| i.to_s }
string_data = csv_data.map {|row| row.map {|cell| cell.to_s } }
array_of_hashes = string_data.map {|row| Hash[*headers.zip(row).flatten] }

def create_robots!(array_of_hashes)
  description = 'This robot is known for its remarkable stamina and durability.  While is was first introduced as a research project, it\'s successes in the prototyping stage have resulted in increased funding and further expansion of the project.'

  array_of_hashes.each_with_index do |row, robot_number|
    Robot.create!(
      name: row['name'],
      manufacturer: row['manufacturer'],
      video_url: row['video_url'],
      image_url: row['image_url'],
      # lat: row['lat'].to_i,
      # lng: row['lng'].to_i,
      lat: rand() * 0.050 + 37.735,
      lng: rand() * 0.050 + -122.482,
      price: row['price'].to_i,
      description: description,
      # description: row['description_text'],
      robot_type: row['robot_type'],
      )

    numComments = 5
    numComments.times do |commentNumber|
      create_comment!(robot_number, commentNumber)
    end
  end
end

def create_comment!(robotNumber, commentNumber)
  comment_text = "This is a fantastic robot.  We took it out for a test on Saturday and had a ball!"
  Comment.create!(
    user_id: 0,
    robot_id: robotNumber,
    title: 'Comment ' + commentNumber.to_s,
    body: comment_text,
  )
end

create_robots!(array_of_hashes)
