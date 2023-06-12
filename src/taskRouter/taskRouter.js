import express from "express";
import {
  createTask,
  readTasks,
  switchTask,
  deleteTaskById,
} from "../model/TaskModel.js";
const router = express.Router();
// task CRUD
// Read data from database and return to the client

router.get("/", async (req, res) => {
  // get data from the db
  const taskList = await readTasks();

  res.json({
    status: "success",
    message: "Todo do get method",
    taskList,
  });
});

// receive data from the client and create new record into the database
router.post("/", async (req, res) => {
  try {
    const result = await createTask(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New task has been added successfully",
        })
      : res.json({
          status: "error",
          message: "unable to add the data",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.messasge,
    });
    console.log(error);
  }
});

// update record into the database based on the information received

router.patch("/", async (req, res) => {
  try {
    const { _id, type } = req.body;
    //update data in DB
    const result = await switchTask(_id, type);

    result?._id
      ? res.json({
          message: "This item has been updated",
        })
      : res.json({
          status: "error",
          message: "the task did not switched",
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: "The task did not switeched ",
    });
  }
});

//delte record from the database based on the information received
router.delete("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    //deleting item from fake db
    const result = await deleteTaskById(_id);
    console.log(result);
    result?._id
      ? res.json({
          message: "delete sucessfull",
        })
      : res.json({ status: "error", message: "Not sucessfull" });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: "error deleting the task",
    });
  }
});
export default router;
