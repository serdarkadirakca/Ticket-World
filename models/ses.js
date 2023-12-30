const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Ses = sequelize.define("ses", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url: {
    type: DataTypes.STRING,
    allowNull: true
    }
});

  module.exports= Ses;