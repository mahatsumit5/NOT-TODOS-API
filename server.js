import express from "express";
import cors from "cors";
import taskRouter from "./src/taskRouter/taskRouter.js";
const app = express(); //CREATING EXPRESS APP
const PORT = 8000;
// connect mongodb
import { mongoConnect } from "./src/config/mongoDB.js";

mongoConnect();
//CREATING A PORT NUMBER

// Middleware
app.use(express.json());
app.use(cors());

// api endpoint

app.use("/api/v1/task", taskRouter);
//OPEN PORT FOT HTTP REQUEST TO ACCESS THE SERVER
app.use("/", (req, res) => {
  res.json({ message: "server is running healthy" });
});

app.listen(PORT, (err) => {
  err
    ? console.log(err.message)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
