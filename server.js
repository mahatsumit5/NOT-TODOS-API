import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import cors from "cors";
const PORT = process.env.PORT || 8000;
import path from "path";

const _dirname = path.resolve();

// middlewares
app.use(express.json());
app.use(cors());
app.use(express.static(_dirname + "/build"));

// API endpoints
import taskRouter from "./src/taskRouter/taskRouter.js";

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.sendFile(_dirname + "/build/index.html");
});

app.listen(PORT, (req, res) => {
  console.log("sERVER IS UP AND RUNNING");
});
// open port for http request to access the server
