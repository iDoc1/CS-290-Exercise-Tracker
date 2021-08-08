import express from 'express';
import * as exercises from './exercise_model.mjs';

const PORT = 3000;

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());  // Incoming requests is JSON format

/**
 * Creates a new exercise record with a name, reps, weight, unit, and date
 */
app.post('/exercises', (req, res) => {
    
    // Check if unit provided is either lbs or kgs
    if (req.body.unit !== "kgs" && req.body.unit !== "lbs") {
        res.status(500).json({ Error: "Unit must be lbs or kgs"})
    } else {

        // Call function to create exercise document
        exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
            .then(exercise => {
                res.status(201).json(exercise);
            })
            .catch(error => {
                res.status(500).json({ Error: `${error}`});
            });
    };
});

/**
 * Sends a response containing all documents in the exercise database
 */
app.get('/exercises', (req, res) => {
    exercises.findExercises()
        .then(exercise => {
            res.status(200).json(exercise);
        })
        .catch(error => {
            res.status(500).json({ Error: `${error}`});
        });
});

/**
 * Calls a function to update the document with the given _id parameter to the values
 * of the given body parameters in the request. Sends a response containing a JSON
 * array of the updated document.
 */
app.put('/exercises/:_id', (req, res) => {
    exercises.updateExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date, req.params._id)
        .then(numUpdate => {

            // Send response if number updated is returned
            if (numUpdate === 1) {
                res.json({_id: req.params._id, name: req.body.name, reps: req.body.reps, 
                    weight: req.body.weight, unit: req.body.unit, date: req.body.date});
            } else {                
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {            
            res.status(500).json({ Error: `${error}` });
        });
});

/**
 * Deletes the record with the given _id
 */
app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {

            // Set response status if a single record was deleted
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found'});
            }
        })
        .catch(error => {
            res.status(500).json({ Error: `${error}` });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});