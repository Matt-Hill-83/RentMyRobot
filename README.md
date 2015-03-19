# Rent My Robot

* [Live Link](http://www.rent-my-robot.com//)

![robots-index]
[robots-index]: ./docs/wireframes/robots_index.png
## Minimum Viable Product
Rent My Robot is a clone of Airbnb built on Rails and Backbone.
It will show an index view and accompanying map of robots in San Francisco.
Users can:

- [ ] View available robots by listing
- [ ] View embedded video of robot
- [ ] View available robots on map
- [ ] Filter robots listing by price range
- [ ] Filter robots listing by robot type (UAV, industrial, humanoid, military)

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (0.5 day)
In this phase I will implement user authentication in Rails.

[Details][phase-one]

### Phase 2: robot/show, robot/index (1 day)
In this phase I will:
- Create some rudimentary seed data and populate my database.
- Create the BB show view for a single robot, including robot details and an image.

[Details][phase-two]

### Phase 3: robot map view (1 days)
In this phase I will implement the google map view that accompanies the robots index view.

[Details][phase-three]

### Phase 4: robot/index - filtering tools (1 days)
In this phase I will integrate the GUI tools that allow the user to filter the list of robots by price or type.

[Details][phase-four]

### Phase 5: comments/create, comments/show (1 days)
In this phase I will create a view that allows the user to add a comment to a robot's show page.  I will also edit the robot's show page so that it includes a subView of all the comments for that robot.

### Bonus Features (TBD)
- [ ] Ability to search for a robot by name, including autosuggest
- [ ] Ability to add a new robot
- [ ] Pagination of the robot/index view
- [ ] Auto load more list items on scroll
- [ ] User avatars

[phase-one]: ./docs/phases/project_schedule.png
[phase-two]: ./docs/phases/project_schedule.png
[phase-three]: ./docs/phases/project_schedule.png
[phase-four]: ./docs/phases/project_schedule.png
[phase-five]: ./docs/phases/project_schedule.png
