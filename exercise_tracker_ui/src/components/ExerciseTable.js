import React from 'react';
import ExerciseRow from './ExerciseRow.js';

/**
 * Displays a table containing all exercise data in the database
 * @param {object} exercisesData Contains all exercise fetched from database
 * @param {function} onDelete Deletes a given record from database
 * @param {function} onEdit Routes user to the edit webpage 
 * @returns 
 */
function ExerciseTable({ exercisesData, onDelete, onEdit }) {

    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Repetitions</th>
                <th>Weight</th>
                <th className="unitHeader">Unit</th>
                <th>Date</th>
                <th className="iconHeader">Edit</th>
                <th className="iconHeader">Delete</th>
            </thead>
            <tbody>
                {exercisesData.map((exercise, i) => <ExerciseRow 
                    exercise={exercise}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i}/>)}
            </tbody>
        </table>
    );
};

export default ExerciseTable;
