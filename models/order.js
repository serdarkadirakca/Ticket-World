const { DataTypes } = require("sequelize");
const sequelize = require("../data/db");

const Order = sequelize.define("order", {
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cardNo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    CCV:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ExpDate:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: true
});

module.exports = Order;