import express from "express";
const app = express();
import cors from "cors";
const PORT = 8000;

// connect mongodb
import { mongoConnect } from "./src/config/mongoDb.js";
mongoConnect();

// middlewares
app.use(express.json());
app.use(
  cors({
    // origin: "http://localhost:3000", This alllows to set the request coming from the frontend
  })
);

// API endpoints
import taskRouter from "./src/taskRouter/taskRouter.js";
app.use("/api/v1/task", taskRouter);

app.use("/", (req, res) => {
  res.json({ message: "server running healthy" });
});

// open port for http request to access the server
app.listen(PORT, (err) => {
  err
    ? console.log(err.message)
    : console.log(`Server running at http://localhost:${PORT}`);
});
