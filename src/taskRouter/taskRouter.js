import express from "express";
const router = express.Router();

let fakeDb = [
  {
    task: "music",
    hr: "5",
    type: "entry",
    id: "3",
  },

  {
    task: "streaming",
    hr: "7",
    type: "entry",
    id: "8",
  },

  {
    task: "reading",
    hr: "3",
    type: "entry",
    id: "1",
  },

  {
    task: "gaming",
    hr: "12",
    type: "entry",
    id: "6",
  },
  {
    task: "cooking",
    hr: "2",
    type: "entry",
    id: "4",
  },

  {
    task: "exercise",
    hr: "1",
    type: "entry",
    id: "9",
  },
  {
    task: "writing",
    hr: "6",
    type: "entry",
    id: "7",
  },
  {
    task: "painting",
    hr: "4",
    type: "entry",
    id: "10",
  },
  {
    task: "photography",
    hr: "9",
    type: "entry",
    id: "11",
  },
  {
    task: "coding",
    hr: "8",
    type: "entry",
    id: "12",
  },
];
// task CRUD
// Read data from database and return to the client

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Todo do get method",
    data: fakeDb,
  });
});

// receive data from the client and create new record into the database
router.post("/", (req, res) => {
  fakeDb.push(req.body);
  console.log("got hit", req.body);

  res.json({
    message: "New task has been added",
  });
});

// update record into the database based on the information received

router.patch("/", (req, res) => {
  const { id, type } = req.body;
  fakeDb = fakeDb.map((item) => {
    if (item.id === id) {
      // item.type = type;
      // do not use above code in practie
      return { ...item, type };
    }
    return item;
  });

  res.json({
    message: "This item has been updated",

    fakeDb,
  });
});

//delte record from the database based on the information received
router.delete("/", (req, res) => {
  const { id } = req.body;
  console.log("delete is working", id);
  //deleting item from fake db

  fakeDb = fakeDb.filter((item) => item.id !== id);

  res.json({
    message: "delete sucessfull",
    fakeDb,
  });
});
export default router;
