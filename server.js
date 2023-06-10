import express from "express";
import taskRouter from "./src/taskRouter/taskRouter.js";
const app = express(); //CREATING EXPRESS APP
const PORT = 8000;
//CREATING A PORT NUMBER

// Middleware
app.use(express.json());
// api endpoint
app.use("/api/v1/task", taskRouter);
//OPEN PORT FOT HTTP REQUEST TO ACCESS THE SERVER
app.get("/", (req, res) => {
  res.json({ message: "server is running healthy" });
});

app.listen(PORT, (err) => {
  err
    ? console.log(err.message)
    : console.log(`Server is running at http://localhost:${PORT}`);
});
