console.log("Hi");
const express = require("express");
const http = require("http");
const app = express();
const PORT = 4000;

app.use(express.json());

let data = [];

app.post("/hello", (req, res) => {
  console.log(req.body);

  const nam = req.body.name;
  const roll = req.body.rollNo;
  const allempty = nam == "" && roll == "";
  const allfilled = nam != "" && roll != "";
  const noname = nam == "" && roll != "";
  const noroll = nam != "" && roll == "";
  if (noname) {
    res.status(400).send("enter name");
  }

  if (noroll) {
    res.status(400).send("enter roll");
  }

  if (allfilled) {
    res.status(200).send("Successfull entry ");
    data.push(req.body);
  }
  if (allempty) {
    res.status(400).send("Unsuccessful entry");
  }
});

app.listen(PORT, (res, req) => {
  console.log("Hi i'm listening on " + PORT);
});

app.get("/hello", (req, res) => {
  obj = {
    status: 200,
    msg: "Success",
  };
  res.status(200).json(data);
});

// app.get("/hello", (req, res) => {
//   console.log(req.body);
//   res.status(200).send(req.body);
// });

// app.get("/hello", (req, res) => {
//   res.status(200).send("Hi i'm Dev");
// });

// app.post("/add", (req, res) => {
//   const jsonData = [
//     {
//       name: "ABC",
//       rollno: 10,
//     },
//     {},
//     {},
//   ];
//   res.status(200).send(jsonData);
// });

// http
//   .createServer((req, res) => {
//     res.write("Hi");
//     res.end();
//   })
//   .listen(PORT);
