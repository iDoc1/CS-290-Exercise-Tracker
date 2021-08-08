import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';

/**
 * Displays an single row with the data contained in the given
 * exercise object. Displays two icons that, when clicked by the
 * user, will allow user to edit or delete an exercise record.
 * @param {object} exercise Contains data on a single exercise record
 * @param {function} onDelete Deletes a given record from database
 * @param {function} onEdit Routes user to the edit webpage 
 * @returns A React component
 */
function ExerciseRow({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><FaEdit onClick={() => onEdit(exercise)}/></td>
            <td><RiDeleteBin2Line onClick={() => onDelete(exercise._id)}/></td>
        </tr>
    )
};

export default ExerciseRow;