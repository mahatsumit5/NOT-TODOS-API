import express from "express";
const app = express();
const PORT = 8000;
import taskRouter from "./src/taskRouter/taskRouter.js";
//

app.use(express.json());
// api endpoints
app.use("/api/v1/task", taskRouter);

// routers
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "server running as normal",
  });
});

// create a server

app.listen(PORT, (error) => {
  error && console.log(error.message);
  console.log(`Server is running at http://localhost:${PORT}`);
});
