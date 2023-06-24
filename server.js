import express from "express";
const app = express();
import cors from "cors";
const PORT = process.env.PORT || 8000;
import path from "path";
const _dirname = path.resolve();

import dotenv from "dotenv";
dotenv.config();

// connect mongodb
import { mongoConnect } from "./src/config/mongoDb.js";

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

mongoConnect()
  .then(() => {
    app.listen(PORT, (err) => {
      err
        ? console.log(err.message)
        : console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
