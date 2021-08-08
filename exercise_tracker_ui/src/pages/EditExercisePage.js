import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

/**
 * Takes a given exercise object as a parameter, then pre-fills input
 * fields with the object properties. The user can then change any
 * property and hit the submit button, which then updates this record
 * in the database, and on the home page.
 * @param {object} exercise Contains data on a specific exercise
 * @returns A React component
 */
function EditExercisePage({ exercise }) {
    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date);

    const history = useHistory();

    // Defines function to call the Express server to edit a record
    const EditExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        // Display alert message
        if (response.status === 200) {
            alert("Successfully edited exercise record");
        } else {
            alert(`Failed to edit ecercise record, status code = ${response.status}`);
        };
        history.push('/');

    };

    return (
        <>
            <h2>Edit an Exercise Record</h2>
            <p>Modify information below to edit an exercise</p>
            <div>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
                <input
                    type="text"
                    placeholder="reps"
                    value={reps}
                    onChange={e => setReps(e.target.value)} />
                <input
                    type="text"
                    placeholder="weight"
                    value={weight}
                    onChange={e => setWeight(e.target.value)} />
                <input
                    type="text"
                    placeholder="unit (kgs or lbs)"
                    value={unit}
                    onChange={e => setUnit(e.target.value)} />
                <input
                    type="text"
                    placeholder="date MM-DD-YY"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
            </div>
            <button
                className="editButton"
                onClick={EditExercise}>
            Edit Exercise Record</button>
        </>
    );
};

export default EditExercisePage;