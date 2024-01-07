const User = require("../models/user");
const bcrypt = require("bcryptjs");
const emailService = require("../helpers/send-mail");
const config = require("../config");
const ctypto = require("crypto");
const { Op } = require("sequelize");
const schema = require("../data/validate");

exports.get_register = async function(req, res) {
    try {
        return res.render("users/register", {
            title: "Register"
        });
    }
    catch(err) {
        console.log(err);
    }
}

exports.post_register = async function(req, res) {
    const name = req.body.name;
    const surname = req.body.surname;
    const address = req.body.address;
    const city = req.body.city;
    const country = req.body.country;
    const postcode = req.body.postcode;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user  = await User.findOne({ where: { email: email }});
        if(user) {
            res.render("users/register", {
                title: "Login",
                message: { text: "Invalid Email", class: "warning"},
                csrfToken: req.csrfToken()
            });
        }
        else if(!schema.validate(password)){
            res.render("users/register", {
                title: "Register",
                message: { text: "Password must be between 4-10 characters", class: "warning"},
                csrfToken: req.csrfToken()
            });
        }
        else{
            const newUser = await User.create({
                name: name,
                surname: surname,
                address: address,
                city: city,
                country: country,
                postcode: postcode,
                phone: phone,
                email: email, 
                password: hashedPassword });
                res.render("users/login", {
                    title: "Login",
                    message: { text: "Your account has been created", class: "success"},
                    csrfToken: req.csrfToken()
                });
        }
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_login = async function(req, res) {
    const message = req.session.message;
    delete req.session.message;
    try {
        res.render("users/login", {
            title: "login",
            message: message,
            csrfToken: req.csrfToken()
        });
    }
    catch(err) {
        console.log(err);
    }
}

exports.post_login = async function(req, res) {
    const mail = req.body.email;
    const passwd = req.body.password;
    

    try {
        const user = await User.findOne({
            where: {
                email: mail
            }
        });
        if(!user){
            res.render("users/login", {
                title: "login",
                message: { text: "Wrong email", class: "warning"},
                csrfToken: req.csrfToken()
            });
        }
        else{
            const match = await bcrypt.compare(passwd, user.password);
            if(!match) {
                return res.render("users/login", {
                    title: "login",
                    message: { text: "Wrong password", class: "warning"},
                    csrfToken: req.csrfToken()
                });
            }
                req.session.isAuth = true;
                const token =ctypto.randomBytes(32).toString("hex");
                user.resetToken= token;
                user.resetTokenExpiration = Date.now() + (1000 * 60 * 60);
                user.sid= req.session.sid;
                user.save();
                req.session.name = user.name;
                req.session.surname = user.surname;
                req.session.address = user.address ;
                req.session.city = user.city ;
                req.session.country = user.country ;
                req.session.postcode = user.postcode ;
                req.session.email = user.email ;
                req.session.phone = user.phone ; 
                const url = req.query.returnUrl || "/";
                return res.redirect(url);  
        }
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_logout = async function(req, res) {
    try {
        await req.session.destroy();
        res.redirect("/");
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_reset = async function(req, res){
    const message = req.session.message;
    delete req.session.message;
    try {
        res.render("users/reset", {
            title: "Reset Password",
            message: message,
            csrfToken: req.csrfToken()
        });
    }
    catch(err) {
        console.log(err);
    }
}

exports.post_reset = async function(req, res) {
    try {
        const token =ctypto.randomBytes(32).toString("hex");
        const email = req.body.email;
        const user  = await User.findOne({ where: { email: email }});
        if(user) {
            user.resetToken = token;
            user.resetTokenExpiration = Date.now() + (1000 * 60 * 60);
            await user.save();

            emailService.sendMail({
                from: config.email.from,
                to: email,
                subject: "Reset Password",
                html: `
                    <p>Click link to reset your password</p>
                    <p>
                        <a href="http://127.0.0.1:3000/new-password/${token}">Reset Password<a/>
                    </p>
                `
            });
            res.render("users/login", {
                title: "Login",
                message: {text:"Reset mail has been sent.", class: "success"},
                csrfToken: req.csrfToken()
            });
        }
        else{
            res.render("users/reset", {
                title: "Reset Password",
                message: {text: "Invalid Email", class:"warning"},
                csrfToken: req.csrfToken()
            });
        }
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_new_password = async function(req,res){
    const token = req.params.token;

    try {
        const user = await User.findOne({
            where: {
                resetToken: token,
                resetTokenExpiration: {
                    [Op.gt]: Date.now()
                }
            }
        });
        console.log(user.id);
        res.render("users/new-password", {
            title: "New Password",
            token: token,
            userId: user.id
        });
    }
    catch(err) {
        console.log(err);
    }
}

exports.post_new_password = async function(req,res){
    const token = req.body.token;
    const userId = req.body.userId;
    const newPassword = req.body.password;

    try {
        const user = await User.findOne({
            where: {
                resetToken: token,
                resetTokenExpiration: {
                    [Op.gt]: Date.now()
                },
                id: userId
            }
        });

        user.password = await bcrypt.hash(newPassword, 10);
        user.resetToken = null;
        user.resetTokenExpiration = null;
        
        await user.save();

        message = {text: "Password updated.", class:"success"};
        res.redirect("/");
    }
    catch(err) {
        console.log(err);
    }
}