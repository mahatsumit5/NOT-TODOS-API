// model creates a table
import TaskSchema from "./TaskSchema.js";

// create data in db
export const createTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

// read data from the db
export const readTasks = () => {
  return TaskSchema.find();
};

// switch task
// id as an string
export const switchTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type });
};

// delete task by id
export const deleteTaskById = (_id) => {
  return TaskSchema.findByIdAndDelete(_id);
};
