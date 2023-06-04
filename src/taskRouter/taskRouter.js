import express from "express";
const router = express.Router();

let fakeDb = [];
// task CRUD
// Read data from database and return to the client
router.get("/", (req, res) => {
  res.json({
    message: "Todo do get method",
    data: fakeDb,
  });
});

// receive data from the client and create new record into the database
router.post("/", (req, res) => {
  console.log("got hit", req.body);
  fakeDb.push(req.body);

  res.json({
    message: "New task has been added",
  });
});

// update record into the database based on the information received

router.put("/", (req, res) => {
  res.json({
    message: "Todo do put method",
  });
});

//delte record from the database based on the information received
router.delete("/", (req, res) => {
  const { id } = req.body;
  console.log("delete is working", id);
  //deleting item from fake db

  fakeDb = fakeDb.filter((item) => item.id !== id);

  // fakeDb = fakeDb.filter((obj) => obj.id !== id);

  res.json({
    message: "delete sucessfull",
    fakeDb,
  });
});
export default router;
