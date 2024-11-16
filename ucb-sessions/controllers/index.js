const express = require("express");
const router = express.Router();

router.get("/sessiondata", (req, res) => {
  res.json(req.session);
});

router.get("/addone", (req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send("added one!");
});

router.get("/secretclub", (req, res) => {
  if (req.session.user) {
    res.send(
      `welcome to the secret club! We will contact you at ${req.session.user.email}`
    );
  } else {
    res.status(401).json({ msg: "login first to join the club!" });
  }
});

const userRoutes = require("./userRoutes.js");
router.use("/api/users", userRoutes);

const dogRoutes = require("./dogRoutes.js");
router.use("/api/dogs", dogRoutes);

module.exports = router;
