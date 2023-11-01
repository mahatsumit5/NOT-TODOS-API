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
import mongoose from "mongoose";

app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.sendFile(_dirname + "/build/index.html");
});

const dbLink =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_CLIENT
    : "mongodb://127.0.0.1:27017/nottododb";
console.log(dbLink);
mongoose
  .connect(dbLink)
  .then(() => {
    console.log("mongo connected");
    app.listen(PORT, (err) => {
      err
        ? console.log(err.message)
        : console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
app.listen(PORT, (REQ, RES) => {
  console.log("sERVER IS UP AND RUNNING");
});
// open port for http request to access the server
