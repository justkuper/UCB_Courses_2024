const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Dog extends Model {}

Dog.init(
  {
    // add properites here, ex:
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isGoodDog: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    sequelize,
  }
);

module.exports = Dog;
