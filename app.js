// express
const express = require("express");
const app = express();

const session = require('express-session');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const csurf = require("csurf");
require("./production")(app);

// node modules
const path = require("path");

// routes
const userRoutes = require("./routes/user");

// custom modules
const sequelize = require("./data/db");
const dummyData = require("./data/dummy-data");
const locals = require("./middlewares/locals");

// template engine
app.set("view engine", "ejs");

// models
const Category = require("./models/category");
const Product = require("./models/product");
const User = require("./models/user");
const Ses = require("./models/ses");
const Title = require("./models/title");
const ProductUsers = require("./models/productusers");

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "ticket world",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24* 60
    },
    store: new SequelizeStore({
        db: sequelize
    })
}));

app.use(csurf());
app.use(locals);


app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(userRoutes); 

User.belongsToMany(Product,{ through: "productUsers"});
Product.belongsToMany(User, { through: "productUsers"});

Product.belongsToMany(Category,{through: "productCategories"});
Category.belongsToMany(Product,{through: "productCategories"});

// (async () => {
//     await sequelize.sync({ force: true });
//     await dummyData();
// })();

const port = 3000;

app.listen(port, () => {
    console.log("listening on port 3000"); 
});

module.exports = app;