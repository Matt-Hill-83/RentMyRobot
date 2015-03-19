# Robot Gallery

# Personal Portfolio site


* [Live Link](http://www.rent-my-robot.com//)

## Minimum Viable Product
Robot-Gallery is a clone of Airbnb built on Rails and Backbone.
It will show an index view and accompanying map of robots in San Francisco.
Users can:

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] View available robots by listing
- [ ] View embedded video of robot
- [ ] View available robots on map
- [ ] Filter robots listing by name
- [ ] Filter robots listing by price range
- [ ] Filter robots listing by robot type (UAV, industrial, humanoid, military)
- [ ] Comment on a robot
- [ ] Like a robot
- [ ] View a collection of liked robots


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

[Details][phase-five]

### Phase 6: like/create, like/show (1 days)
In this phase I will allow the user to "like" a robot.  There will be a small outline of a heart on the corner of each robot's image.  If they click this, the heart will become solid and the robot have a has_many relationship with a like model in the database.

[Details][phase-six]

### Phase 7: robot_likes/show (1 days)
In this phase I will create the view that show all the robots that the user has "liked".  This will probably be just a filtered index view.

[Details][phase-seven]

### Phase 8: Styling (2 days)
In this phase I will implement the CSS and backbone styling.ß

[Details][phase-eight]

### Phase 9: Add non-critical feeatures (1 days)
In this phase I will complete punch list items that were depriotitized in order to prove out the core functionality.  These include the ability to edit and delete comments.

[Details][phase-nine]

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
[phase-six]: ./docs/phases/project_schedule.png
[phase-seven]: ./docs/phases/project_schedule.png
[phase-eight]: ./docs/phases/project_schedule.png
[phase-nine]: ./docs/phases/project_schedule.png
