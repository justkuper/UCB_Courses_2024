const express = require("express");
const router = express.Router();
const { Dog, User } = require("../models");

//read all
router.get("/", (req, res) => {
  Dog.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh no!", err });
    });
});

//create
router.post("/", (req, res) => {
  Dog.create({
    name: req.body.name,
    age: req.body.age,
    breed: req.body.breed,
    UserId: req.body.UserId,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh no!", err });
    });
});

//read one
router.get("/:id", (req, res) => {
  Dog.findByPk(req.params.id, {
    include: [User],
  })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ msg: "no such Dog" });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh no!", err });
    });
});

//edit one
router.put("/:id", (req, res) => {
  Dog.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data[0]) {
        return res.status(404).json({ msg: "no such Dog" });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh no!", err });
    });
});

//delete one
router.delete("/:id", (req, res) => {
  Dog.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ msg: "no such Dog" });
      }
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "oh no!", err });
    });
});

module.exports = router;
