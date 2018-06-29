# Project 3

# WDI34_PROJECT_3
# Group Project
<hr>
![image](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# GA WDI-34 Project 3 - Hidden 💎 Gem's of London
For our third project, we were given a week to build an app using Angular, MongoDB, Api's(of our choosing), HTML, SCSS, JS, Heroku, Bulma and Mocha. This was our first group project

##### Click our [App ](https://agile-reef-53408.herokuapp.com/#!/) for best experience.
---
<!-- ## Setup instructions
- Clone or download the repo
- Install dependencies with `yarn install`
- Launch the app with `gulp` -->

---
# Overveiw of the Hidden 💎 Gem's of London App
<p align="center">
<img src="README Images/homepage-loggedOut.png" width="700">
</p>
This is our <b>Homepage</b>, it features a simple background image of the skyline of London, the nav bar is clearly visable and the footer is there to illustrated our apps ties to social media outlets. Initially we did try to the have a search bar as well, however we could not get the search to direct to our places we have in our <b>All Places</b> page.

<p align="center"><br>
<img src="README Images/AllPlaces-menuDropdown.png" width="700">
</p>
Clicking the <b>All Places</b> button in the nav bar takes you to the page the app is centred around, it displays a list of places within London. As shown in the picture it can be sorted by Type, A-Z or Z-A. the site went through many iterations but we settled on a sunset-like gradient change for the background with a muted eggshell for each of the cards displaying the places. We used this theme throughout the project based on how pleased we were with the layout on this page turned out. </p>
<img src="README Images/AllPlaces-pageBottom.png" width="700"><br>

<br><p>This is the bottom of the <b>All Places</b> page, the gradient finishes bright and the footer is the same eggshell as the cards for each place. We decided to ask visitors to <b>Log in</b> or <b>Register</b> to add their own new place, we put links in the message to both Register and Login pages for ease and</p>

<p align="center">
<img src="README Images/Register - FormNotFilled.png">
</p>
This is the Registration page for new users, you get here either from clicking the <b>Navbar</b> button or from one of the links within the <b>All Places</b> or within each individual <b>Place</b>. The submit button is un-clickable unless all of the fields in the form are filled in. The page follows the same theme as the <b>All Places</b> page.
<br>
<br>
<p align="center"><img src="README Images/Register-FormFilled.png" width="700">
<p>Once the form is filled the <b>Submit button</b> is now clickable.</p>
</p>
<p align="center"><img src="README Images/LoginPage.png" width="700">
<p>
 We decided to speed the logging in process up by having the <b>registration page</b> take you to the <b>login page</b> once the <b>registration</b> form had been correctly filled in.</p>

<p align="center"><img src="README Images/AllPlaces-LoggedIn.png" width="700"></p>
 Once the user is logged in, the app will display their name in the Navbar and become a clickable link to their personal <b>Profile page</b>.<br>

 <br>

 <p align="center"><img src="README Images/Profile-Page.png" width="700">
 <p>This is the <b>User Profile</b> page, Initially we were not going to have this feature, however half way through we decided to implement this page. The premise of the <b>Profile page</b> was that you could view your own profile, other people profiles, the <b>Comment Score</b> would reflect your comments on any <b>Place</b> on the app and wether you had up or down votes on your comments. <br>
 We also wanted to use a geolocation feature that would use the hardware of whatever device you viewed this app on the locate where you are in relation to any place listed on the app, however we ran out of time.</p>

<p align="center"><img src="README Images/Place-PageTop.png" width="700">
<p>Upon clicking on any of the <b>Places</b> on the <b>All places</b> page, you are taken to this screen. The premise of the whole app is centred around being able to view these Places, leave reviews, rate the place, vote on other users reviews and see the location of the place on the google map at the bottom of the page.

<p align="center"><img src="README Images/Place-PageBottom.png" width="700">
<p>This is the bottom half of the <b>Place</b> page, we used the GoogleMap API to utilise this feature on our app.
</p>

<p align="center"><img src="README Images/New-Place-Page.png" width="700">
<p>This is the <b>New Place</b> page, users are able to add palces they have visited on the this pages, they are able to select an image of the place to be displayed on the <b>All PlacesK</b> page, a price using £'s to convey cheap, average and expensive.' We played around with the styling but settled on the same theme, with a few <b>Bulma</b> buttons what change when hovered over.
</p>

<br>
<h2>Things we would like to add to the App:</h2>
 <p> - We would like to have a search bar on the Homepage linked to <b>All Places</b></p>
 <p> - We would have a functional <b>Profile page</b> which allows your <b>Comment Score</b> and <b>Profile Picture</b> to display. Also on the <b>Profile page</b> page a map showing your Location in relation to the other Places on the app.</p>

 <p>- A Logo for the App</p>

<p>- An Animated Homepage that displays our apps features</p>

<p>- A carousel of our Places</p>

---
# Final Thoughts

<b>Antoni (Project Manager)</b> -

- I found it Interesting working in group, other then being an important learning experience it also gave us the chance to see how we would be working in our careers after the course.

- I found the most frustrating thing during this project to be the styling aspect of it. It took much longer then I envisaged, however it was nice to work as a team and get their input and bounce ideas off of each other.
- I think as a group we underestimated how long things would take to implement, and I think at times we should of prioritised things in a different way.

<b>Brad</b> -

- If we had to start again I Would want a better understanding of implementing things we hadn't used yet such as Geolocation, Directions and other Api's (a whole days worth of searching for how to implement them.

- We suffered delays in the first few days which were caused by using Github as a group for the first time, working on inccorect branch's, not pushing, not pulling. These are all teething problems and I know next time I'll have a much better grip on Github.

- I think we started of feeling a bit too confident and got a bit lax with out time managemnet which led to us having to pick up the strain later on, which lead to features being left out.

<b>Josh</b> -

- I enjoyed working as a team, my initial concern was my ability compared to the rest of the group. However this was alleviated from day one, when I realised the project was the goal and no one was there to put anyone else down.

- A challenge for me during the Project was tying the User Profile to the other feature in the app. I came away slightly deflated as the page does not work, but I know that failure this time will only improve my in the next project.

- I enjoyed using Trello to manage our time and I think we worked well as a team, there were no arguments and we worked through everything together, with daily group stand-ups and constant communication, especially when things went wrong.
