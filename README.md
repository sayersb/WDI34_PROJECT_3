# WDI Project 3 

![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

## HIDDEN GEMS - MEAN stack app - Collaborative Project

![hg](https://github.com/sayersb/WDI34_PROJECT_3/blob/master/hiddengems.gif?raw=true)








## Intro


My third project on the WDI course, the first team project with the view to creating a MEAN(MongoDB, Express.js, Angular.js & Node.js) stack app. We were given one week to devise and build the application that showcases 'hidden gems' in London for visitors.

Technologies implemented : 


| JavaScript(ECMAScript6)        | AngularJS          | SASS  |
| ------------- |:-------------:| -----:|
| HTML5      | Express.js | MongoDB |
| Mongoose      | Node.js      |   Yarn |
| Bulma |   Filepicker-js   |    Webpack |
| jsonwebtoken | bcrypt     |    body-parser |
| bluebird | Request-Promise     |    babel |
| chai | mocha     |    satellizer |
| supertest | sass-loader     |    Trello |
| wireframe.cc | Heroku     |    Slack |


The application has been deployed on [Heroku](https://hidden-gems-api.herokuapp.com) 

*Please be aware that Heroku apps go to sleep after 30 mins of inactivity and may take a little time to load*


## Build Process 

After being assigned the group we decided to spend some time thinking about ideas individually, then having a group discussion about each of our top three picks. We quickly came to an agreement that the app would be a travel app, showcasing 'hidden gems' around the world. As a group of three Londoners it was clear the app should be focused primarily in London to start, with the possibility of adding more cities later.


We used Trello to help us organize the allocation of the work load, starting with the wireframing (using wireframe.cc). Having agreed upon the models and data we would use for the locations and users, we then assigned each page to be built amongst the team in order to achieve our
MVP. 

![image](https://github.com/sayersb/WDI34_PROJECT_3/blob/master/Gems%20Trello.png?raw=true)

This was the first project bringing in outside API's, we all wanted to showcase this with use of the Google Maps API (shown in the image below) to help pinpoint hidden gem locations on a map for the users. The Filepicker API was also implemented in order for users to upload their own images for a hidden gem location easily.


![image](https://github.com/sayersb/WDI34_PROJECT_3/blob/master/Google%20Maps%20API.png?raw=true)

Having learnt about the seeding process since the previous project it was clear that they would be important in testing the functionality and design aspects of the app. The seeds included information on the places as well as ratings and comments for users. An example can be seen below : 

![image](https://github.com/sayersb/WDI34_PROJECT_3/blob/master/Seeds.png?raw=true)

We wanted users to be able to comment(review) on the locations as well as rate them on a scale from 1-5, with an average rating for each location also visible. These features were implemented in the time we planned to complete our MVP, leaving ourselves more time towards the end for debugging and styling than the previous projects. We managed to implement our own tests with help from Mocha and Chai, an example of which can be seen in the image below : 


![image](https://github.com/sayersb/WDI34_PROJECT_3/blob/master/Test.png?raw=true)


Overall we were pleased with the final product and worked well as a team, prompting all members to choose a collaborative project for the final app made on the course. 



## Issues

  * This was the first collaborative project for all three members of my group, leading to some issues at the beginning of the build process with merges on GitHub. 
  
  * The repository was created by a team member who wasn't the project manager, so after this was forked and pulled from the new members repository we encountered new errors with merges that slowed the build process down.
  
  * We spent time working on a user profile page, showcasing all the personal user information including posts, reviews and likes. This feature was not fully implemented due to the idea arising with only a couple of days left to finish and deploy the app.

  
  
##  Other GA Project Repositories

  * 1st: [Chain Game](https://github.com/sayersb/project-1-wdi)

  * 2nd: [World Cup Predictor App](https://github.com/sayersb/project-2-wdi)

  * 4th: [ABC Events App](https://github.com/sayersb/WDI-PROJECT-4)

  
