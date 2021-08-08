import React from 'react';
import ExerciseTable from '../components/ExerciseTable';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CgAdd } from 'react-icons/cg';

/**
 * Define functions to display all exercise data, edit an exerise, add 
 * an exercise, and delete an exercise. User can view all exercise data 
 * and choose an option to edit, add, or delete an exercise.
 * @returns A React componenent
 */
function HomePage({ setExerciseToEdit }) {
    const [exercisesData, setExercises] = useState([]);
    const history = useHistory();

    // Call server to delete a row with the given _id
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE'});
        
        // Set exercisesData variable to all documents excluding that with deleted _id
        if (response.status === 204) {
            setExercises(exercisesData.filter(e => e._id !== _id));
        } else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        }
    }

    // Define function ro redirect user to Edit Exercise page
    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push('/edit-exercise');
    }

    // Call server to get all exercise data
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    // Call loadExercises function when this component initially rendered
    useEffect(() => {
        loadExercises();
    }, []);

    return(
        <>
            <h2>Exercise Tracker</h2>
            <ExerciseTable 
                exercisesData={exercisesData} 
                onDelete={onDelete}
                onEdit={onEdit}></ExerciseTable>
            <br/> 
            <div> 
                <span><CgAdd className="addIcon"/></span>        
                <Link to="/add-exercise">Add an exercise</Link>
            </div>
            
        </>
    )
};

export default HomePage;