const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const PORT = 3000;

app.use(express.json());
let bountyHunter = [
  {
    firstName: "Dave",
    lastName: "Brings",
    living: true,
    bountyAmount: 5000,
    type: "soldier",
    _id: uuidv4()
  },
  {
    firstName: "Man",
    lastName: "james",
    living: true,
    bountyAmount: 1000,
    type: "Human",
    _id: uuidv4()
  },
  {
    firstName: "lion",
    lastName: "heart",
    living: true,
    bountyAmount: 50000,
    type: "animal",
    _id: uuidv4()
  },
];

app.get("/bountyHunter", (req, res) => {
  res.send(bountyHunter);
});

app.post("/bountyHunter", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuidv4();
  bountyHunter.push(newBounty);

  console.log(bountyHunter);
  res.send(`Successfully added ${newBounty.firstName} to the database`);
});

app.listen(PORT, () => {
  console.log(`App started on port: ${PORT}`);
});