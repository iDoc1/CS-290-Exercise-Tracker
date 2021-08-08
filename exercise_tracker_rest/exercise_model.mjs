import { strict } from 'assert';
import mongoose from 'mongoose';

// Prepare database connection on port 27017
mongoose.connect(
    "mongodb://localhost:27017/exercise_db",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to database
const db = mongoose.connection;

// Print successful connection message to console
db.once("open", () => {
    console.log("Successfully connected to MongoDB database.")
});

/**
 * Define database schema
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true}, 
    reps: { type: Number, required: true},
    weight: { type: Number, required: true},
    unit: { type: String, required: true},
    date: { type: String, required: true}
});

/**
 * Compile the model from the schema
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);

/**
 * Saves an exercise document to the database using the given parameters 
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight 
 * @param {String} unit 
 * @param {String} date 
 * @returns A promise that resolves to a JSON object for the created document
 */
const createExercise = async (name, reps, weight, unit, date) => {

    // Call constructor to create instance of the model Exercise class
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save()  // Save to database
};

/**
 * Retrieves all exercise documents 
 * @returns 
 */
const findExercises = async () => {
    const query = Exercise.find();
    return query.exec();
};

/**
 * Updates an existing document with the given _id using the given parameters
 * @param {String} name 
 * @param {Number} reps 
 * @param {NUmber} weight 
 * @param {String} unit 
 * @param {String} date 
 * @param {String} _id 
 * @returns Number of records modified
 */
const updateExercise = async (name, reps, weight, unit, date, _id) => {
    const result = await Exercise.replaceOne({_id: _id}, { name: name, reps: reps, weight: weight, unit: unit, date: date});
    return result.nModified;
};

/**
 * Deletes the document with the given _id
 * @param {String} _id 
 * @returns Number of records deleted
 */
const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({_id: _id});
    return result.deletedCount;
}

export { createExercise, findExercises, updateExercise, deleteById };
