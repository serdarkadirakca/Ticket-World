const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categories");
const userController = require("../controllers/user");
const authController = require("../controllers/auth");
const csrf = require("../middlewares/csrf");
const isAuth = require("../middlewares/auth");

router.get("/other", csrf,categoriesController.get_other);

router.get("/musical", csrf,categoriesController.get_musical);

router.get("/theatre", csrf,categoriesController.get_theatre);

router.get("/cinema", csrf,categoriesController.get_cinema);

router.get("/concert", csrf,categoriesController.get_concert);

router.get("/order", csrf,userController.get_order);

router.get("/checkout", isAuth, csrf, userController.get_checkout);

router.post("/checkout", isAuth, csrf, userController.post_checkout);

router.get("/cart", isAuth, csrf, userController.get_cart);

router.post("/cart", isAuth, csrf, userController.post_cart);

router.get("/new-password/:token", csrf, authController.get_new_password);

router.post("/new-password", csrf,authController.post_new_password);

router.post("/reset", csrf, authController.post_reset);

router.get("/reset", csrf, authController.get_reset);

router.post("/account", isAuth, csrf,userController.post_account);

router.get("/account", csrf, isAuth, userController.get_account);

router.get("/register", csrf, authController.get_register);

router.post("/register", csrf,authController.post_register);

router.get("/logout", csrf, authController.get_logout);

router.get("/login", csrf, authController.get_login);

router.post("/login", csrf,authController.post_login);

router.get("/", csrf,userController.index);

router.get("/:slug", csrf, userController.get_productdetails);

router.post("/:slug", csrf, userController.post_productdetails);

module.exports = router;