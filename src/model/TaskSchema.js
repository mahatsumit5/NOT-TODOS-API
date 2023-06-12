import mongoose from "mongoose";
//Schema creates a Table
const { Schema } = mongoose;
// Schema is the method of methods
const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  hr: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    default: "entry",
  },
});

// creating tables
export default mongoose.model("Task", taskSchema); //create a table name With tasks(Task=> tasks)

//queries
