const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Title = sequelize.define("title", {
  name: {
      type: DataTypes.STRING,
      allowNull: false
  }
});

  module.exports= Title;