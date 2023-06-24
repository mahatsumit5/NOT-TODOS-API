import express from "express";
const app = express();
import cors from "cors";
const PORT = 8000;
import path from "path";
import dotenv from "dotenv";
dotenv.config();

// connect mongodb
import { mongoConnect } from "./src/config/mongoDb.js";
mongoConnect();
const _dirname = path.resolve();
console.log(_dirname);

// middlewares
app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:3000", This alllows to set the request coming from the frontend
  })
);
app.use(express.static(_dirname + "/build"));

// API endpoints
import taskRouter from "./src/taskRouter/taskRouter.js";
app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.sendFile(_dirname + "/index.html");
});

// open port for http request to access the server
app.listen(PORT, (err) => {
  err
    ? console.log(err.message)
    : console.log(`Server running at http://localhost:${PORT}`);
});
