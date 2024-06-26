import express from "express";

const app = express();
// express le je return garcha that is our app

// ?to make app understand json
// req.body ma pathako object lai identify as object identify garna help garcha
app.use(express.json());

let studentList = [
  { id: 1, name: "Ram" },
  { id: 2, name: "Rob" },
];

// ?add student
// req, res are objects
app.post("/student/add", (req, res) => {
  console.log(req.body);
  const newStudent = req.body;
  studentList.push(newStudent);
  return res.status(200).send("hello");
});

// ?get student
app.get("/student/list", (req, res) => {
  return res.status(200).send(studentList);
});

// ?network port
const PORT = 8088;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
