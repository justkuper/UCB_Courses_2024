const User = require("./User");
const Dog = require("./Dog");

User.hasMany(Dog, {
  onDelete: "CASCADE",
});

Dog.belongsTo(User);

module.exports = {
  User,
  Dog,
};
