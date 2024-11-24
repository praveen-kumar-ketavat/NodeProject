const express = require("express");
const {
  handleGetStudents,
  handlePostStudents,
  handleDeleteStudents,
} = require("../controllers/studentsController");

const router = express.Router();

router.get("/", handleGetStudents);
router.post("/", handlePostStudents);
router.delete("/:id", handleDeleteStudents);

module.exports = router;
