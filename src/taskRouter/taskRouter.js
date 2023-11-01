import express from "express";
import {
  deleteTaskById,
  switchTask,
  deleteManyTasks,
} from "../model/TaskModel.js";
import {
  createTask,
  deleteTask,
  readtasks,
  updateTask,
} from "../model/PrismaTaskModel.js";
const router = express.Router();
// const _dirname = path.resolve();

router.get("/", async (req, res) => {
  //get data from the db
  const taskList = await readtasks();

  res.json({
    status: "success",
    message: "From Get method",
    taskList,
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await createTask(req.body);

    result?.id
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

router.patch("/", async (req, res) => {
  try {
    const { id, type } = req.body;
    // update data in db
    const result = await updateTask(id, type);

    result?.id
      ? res.json({
          status: "success",
          message: "The task has been switeched successfully",
        })
      : res.json({
          status: "error",
          message: "The task did not switeched ",
        });
  } catch (error) {
    console.log(error);

    res.json({
      status: "error",
      message: "The task did not switeched ",
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const result = await deleteTask(req.body.id);
    console.log(result);
    result
      ? res.json({
          status: "success",
          message: "The tasks have been deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to delete the task ",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: "Error deleting the task",
    });
  }
});

export default router;
