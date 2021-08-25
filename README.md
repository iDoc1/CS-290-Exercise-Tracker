EXERCISE TRACKER WEB APP

This project is my portfolio project for CS 290: Web Design, which I attended at Oregon State
University. This web app allows a user to enter information about an exercise they performed,
then they can view, edit, or delete any exercise record.

This app utilizes the full MERN stack. React acts as the UI, MongoDB as the database, and
Express as the database server. The Express server was built using REST design principles,
so the Express server in this app is RESTful.

Prerequisites:  
    - Node.js and MongoDB must be installed  
    - Ports 3000 and 8000 must be free on your machine  
    - If either of these ports is not free, you will need to change the port variables  
      in /exercise_tracker_ui/.env and /exercise_tracker_rest/exercise_mode.mjs  

To run:  
    - Navigate to /exercise_tracker_rest/ and /exercise_tracker_ui/  
    - Individually run 'npm install' in each of these directories to install dependencies  
    - First, run 'npm start' in the /exercise_tracker_rest/ directory  
    - Then, run 'npm start' in the /exercise_tracker_ui/ directory  
    - Navigate to http://localhost:8000/exercises on your machine to begin using app  

Thanks for checking out my project!