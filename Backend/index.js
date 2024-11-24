const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const studentsRoute=require("./routes/studentsRoute");
const app = express();
const port =process.env.PORT || 3000;

const uri = "mongodb://localhost:27017/NodeJS";
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to MongoDB.");
  })
  .catch((err) => {
    console.log("trouble in connecting to MongoDB");
  });

app.use(express.json());
app.use(cors());

app.use('/students',studentsRoute);

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
