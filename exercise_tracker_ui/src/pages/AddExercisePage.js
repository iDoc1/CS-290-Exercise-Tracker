import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

/**
 * Allows user to enter information about a specific exercise, then
 * displays a success message and routes user back to the homepage.
 * Calls the POST method on teh Express server to store exercise in
 * database.
 * @returns A React component
 */
function AddExercisePage() {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const exerciseRecord = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(exerciseRecord),
            headers: {
                'Content-type': 'application/json',
            },
        });

        // Display alert message
        if (response.status === 201) {
            alert("Exercise successfully added");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        };
        history.push('/');
    };

    return (
        <>
            <h2>Create an Exercise Record</h2>
            <p>Enter exercise information below</p>
            <div>
                <input 
                    type="text"
                    placeholder="Name "
                    value={name}
                    onChange={e => setName(e.target.value)}/>
                <input 
                    type="test"
                    placeholder="Reps"
                    value={reps}
                    onChange={e => setReps(e.target.value)} />
                <input
                    type="text"
                    placeholder="Weight"
                    value={weight}
                    onChange={e => setWeight(e.target.value)} />
                <input
                    type="text"
                    placeholder="Unit (kgs or lbs)"
                    value={unit}
                    onChange={e => setUnit(e.target.value)} />
                <input
                    type="text"
                    placeholder="Date MM-DD-YY"
                    value={date}
                    onChange={e => setDate(e.target.value)} />
            </div>
            <button 
                className="addButton"
                onClick={addExercise}>
            Add Exercise Record</button>
        </>
    )
};

export default AddExercisePage;