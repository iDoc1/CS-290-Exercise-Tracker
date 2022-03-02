# Exercise Tracker Web App

### Background
This project is my portfolio project for CS 290 - Web Design at OSU. This app allows the
user to add, edit, and delete exercise records. The main functionaity is described below:
- User can add a new exercise record using the given input fields
- User can click the edit icon to edit a record
- User can click the delete icon to delete a record

This app utilizes the full MERN stack. The Model-View-Controller (MVN) design pattern is 
used in this project, where React serves as the View, MongoDB as the model, and Express
as the Controller.

### Before Installing  
- Node.js and MongoDB must be installed  
- Ports 3000 and 8000 must be free on your machine  
- If either of these ports is not free, you will need to change the port variables  
    in /exercise_tracker_ui/.env and /exercise_tracker_rest/exercise_mode.mjs  

### Using the App 
1. Navigate to /exercise_tracker_rest/ and /exercise_tracker_ui/  
2. Individually run the below command in each of these directories to install dependencies  
    ~~~
    npm install
    ~~~
3. Run the below command in the /exercise_tracker_rest/ and the /exercise_tracker_ui/ directories
    ~~~
    npm start
    ~~~
4. Navigate to http://localhost:8000/exercises on your machine to begin using app
    - React should automatically open this page when the UI server is started

The below screenshots provide an overview of the app's functionality.  
  
Main Screen  
![Main Screen](/screenshots/main_screen.png)  
Add an exercise  
![Add exercise](/screenshots/add_exercise.png)  
Edit an exercise  
![Edit exercise](/screenshots/edit_exercise.png)