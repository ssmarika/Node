import express from "express";

// "dev": "nodemon index.js",
// this auto restarts the server. this change is made in package.json

// app
const app = express();

app.get("/", (req, res) => {
  return res.status(200).send("My first API");
});

app.get("/hello", (req, res) => {
  return res.status(200).send("Hello Smarika");
});

// network port and server
// port range 4000-8000
//connected via port 8000 , the network and the app
// port 8000 ma yo app bhetcha
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
