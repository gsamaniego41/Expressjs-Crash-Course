const express = require("express");
const path = require("path");
const members = require("./Members");
const logger = require("./middlware/logger");
const app = express();

// === Init MW ===
// in order to use the logger MW,
app.use(logger);

// Gets all members
app.get("/api/members", (req, res) => {
  res.json(members);
});

// Get single member
app.get("/api/members/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  /* Array.prototype.some()
  The some() method tests whether at least one element in the array
  passes the test implemented by the provided function.
  */
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: `No member with the id of ${req.params.id}`});
  }
});

/* === Set a static folder === */
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
