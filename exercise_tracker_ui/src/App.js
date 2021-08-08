import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import AddExercisePage from './pages/AddExercisePage.js'
import EditExercisePage from './pages/EditExercisePage.js';

/**
 * Parent component that defined routing for this app
 * @returns A React component
 */
function App() {

  // Variable and function to allow editing of a record
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit}/>
          </Route>
          <Route path="/add-exercise">
            <AddExercisePage/>
          </Route>
          <Route path="/edit-exercise">
            <EditExercisePage exercise={exerciseToEdit}/>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
