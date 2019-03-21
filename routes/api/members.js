const express = require("express");
const uuid = require("uuid");
const router = express.Router();
const members = require("../../Members");

// Gets all members
router.get("/", (req, res) => {
  res.json(members);
});

// Get single member
router.get("/:id", (req, res) => {
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

// Create member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({msg: "Please include a name and email"});
  }

  members.push(newMember);
  res.status(200).json(members);
});

// Update member
router.put("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    const updated = req.body;
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        // if the user only wants to update 1 field:
        // did the user send an updated name?
        member.name = updated.name ? updated.name : member.name;
        // did the user send an updated email?
        member.email = updated.email ? updated.email : member.email;

        res.status(201).json({msg: "Member was updated", member});
      }
    });
  }
});

module.exports = router;
