const sequelize = require("../config/connection");
const { User, Dog } = require("../models");

const userData = [
  {
    email: "joe@joe.joe",
    password: "password",
  },
  {
    email: "cats@joe.joe",
    password: "meowmeow",
  },
];

const dogData = [
  {
    name: "Puppy",
    age: 13,
    breed: "Great Dane",
    isGoodDog: true,
    UserId: 1,
  },
  {
    name: "Cocoa",
    age: 4,
    breed: "Terrier",
    isGoodDog: true,
    UserId: 1,
  },
];

const seedMe = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
      individualHooks: true,
    });
    await Dog.bulkCreate(dogData);
    console.log("seeded!");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedMe();
