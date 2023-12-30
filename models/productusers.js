const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");
const Product = require("./product");
const User = require("../models/user");

const ProductUsers = sequelize.define('productUsers', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id'
      }
    },
    productPrice:{
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 225
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull:true
    }
});

module.exports = ProductUsers;