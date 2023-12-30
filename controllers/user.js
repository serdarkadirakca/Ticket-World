const Product = require("../models/product");
const Category = require("../models/category");
const User = require("../models/user");
const Title = require("../models/title");
const Ses = require("../models/ses");
const emailService = require("../helpers/send-mail");
const config = require("../config");
const ProductUsers = require("../models/productusers");

exports.index = async function(req, res) {
    try {
        const category = await Category.findAll({raw:true});
        let countCart;
        if(!req.session.email){
        const categoryTitle = await Title.findAll({raw:true});
        const products = await Product.findAll({raw:true});
        const productCategory1 = await Product.findAll({
            include:{
                model:Category,
                where: {id:1}
            },
            raw: true,
            limit:6
        });
        const productCategory2 = await Product.findAll({
            include:{
                model:Category,
                where: {id:2}
            },
            raw: true,
            limit:6
        });
        const productCategory3 = await Product.findAll({
            include:{
                model:Category,
                where: {id:3}
            },
            raw: true,
            limit:6
        });
        const productCategory4 = await Product.findAll({
            include:{
                model:Category,
                where: {id:4}
            },
            raw: true,
            limit:6
        });
        const productCategory5 = await Product.findAll({
            include:{
                model:Category,
                where: {id:5}
            },
            raw: true,
            limit:6
        });
        const productSession = await Ses.findAll();

        res.render("users/index", {
            title: "Home",
            products:products,
            countCart:countCart,
            category:category,
            productCategory1:productCategory1,
            productCategory2:productCategory2,
            productCategory3:productCategory3,
            productCategory4:productCategory4,
            productCategory5:productCategory5,
            productSession:productSession,
            name:"",
            surname:"",
            categoryTitle: categoryTitle
        })
        }
        else{
            const email = req.session.email;
            const user = await User.findOne({
                where:{
                    email:email
                }
            });
            const categoryTitle = await Title.findAll({raw:true});
            const products = await Product.findAll({raw:true});
            const productCategory1 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:1}
                },
                raw: true,
                limit:6
            });
            const productCategory2 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:2}
                },
                raw: true,
                limit:6
            });
            const productCategory3 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:3}
                },
                raw: true,
                limit:6
            });
            const productCategory4 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:4}
                },
                raw: true,
                limit:6
            });
            const productCategory5 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:5}
                },
                raw: true,
                limit:6
            });
            const productUsers = await ProductUsers.findAll({raw:true});
            countCart=0;
            for (let i = 0; i<productUsers.length; i++) {
                countCart += productUsers[i].quantity;
            }
            const productSession = await Ses.findAll();
            res.render("users/index", {
                title: "Home",
                products:products,
                countCart:countCart,
                name:user.name,
                surname:user.surname,
                productCategory1:productCategory1,
                productCategory2:productCategory2,
                productCategory3:productCategory3,
                productCategory4:productCategory4,
                productCategory5:productCategory5,
                productSession:productSession,
                category:category,
                categoryTitle: categoryTitle
            })
        }
        
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_account = async function(req,res){
    try {
        const user = await User.findOne({
            where:{
                email:req.session.email
            }
        });
        const productUsers = await ProductUsers.findAll({raw:true});
            countCart=0;
            for (let i = 0; i<productUsers.length; i++) {
                countCart += productUsers[i].quantity;
            }
        res.render("users/account", {
                title: "My Account",
                name: user.name,
                surname: user.surname,
                address:user.address,
                city:user.city,
                country:user.country,
                postcode:user.postcode,
                email:user.email,
                phone:user.phone,
                resetToken: user.resetToken,
                countCart: countCart
            });
        }        
    catch(err) {
        console.log(err);
    }
}

exports.post_account = async function(req,res){  
     try {
         const user = await User.findOne({
             where:{
                 email:req.session.email
             }
         });
             if(req.body.name)
                 user.name=req.body.name;
             if(req.body.surname)
                 user.surname=req.body.surname;
             if(req.body.address)
                 user.address=req.body.address;
             if(req.body.city)
                 user.city=req.body.city;
              if(req.body.country)
                 user.country=req.body.country;
             if(req.body.postcode)
                 user.postcode=req.body.postcode;
             if(req.body.email)
                 user.email=req.body.email;
             if(req.body.phone)
                 user.phone=req.body.phone;
             user.save();
          res.redirect("/account");
         }
      catch(err) {
          console.log(err);
      }
}

exports.get_productdetails = async function(req,res){
    try {
        const slug = req.params.slug;
        let countCart;
        if(!req.session.email){
            const category = await Category.findAll({raw:true});
            const product = await Product.findAll({
                where:{
                    url:slug
                }
            },
                {raw:true});
            const productSession = await Ses.findAll();
            const productUsers = await ProductUsers.findAll({raw:true});
            countCart=0;
            for (let i = 0; i<productUsers.length; i++) {
                countCart += productUsers[i].quantity;
            }
            res.render("users/product-details", {
                title: slug,
                product:product[0],
                countCart:countCart,
                category:category,
                productSession:productSession,
                name:"",
                surname:""
            })
        }
        else{
            const email = req.session.email;
            const user = await User.findOne({
                where:{
                    email:email
                }
            });
            const userProducts = await Product.findAll({
                include:{
                    model:User,
                    where:{id:user.id}
                },
                raw: true
            });
            countCart = userProducts.length; 
        
            const categoryTitle = await Title.findAll({raw:true});
            const product = await Product.findAll({
                where:{
                    url:slug
                }
            },
                {raw:true});
            const productSession = await Ses.findAll();
            const productUsers = await ProductUsers.findAll({raw:true});
            countCart=0;
            for (let i = 0; i<productUsers.length; i++) {
                countCart += productUsers[i].quantity;
            }
            res.render("users/product-details", {
                title: slug,
                product:product[0],
                countCart:countCart,
                name:user.name,
                surname:user.surname,
                productSession:productSession,
                categoryTitle: categoryTitle
            })
        }
        
    }
    catch(err) {
        console.log(err);
    }
}

exports.post_productdetails = async function(req,res){
    const email = req.session.email;
    const quantity = req.body.quantity;
    try {
        if(!email){
            res.redirect("/cart");
        }
        const product = await Product.findOne({
             where:{
                 url:req.params.slug
             }
            });
            ProductUsers.quantity = quantity;
            
        const user = await User.findOne({
            where:{
                email:email
            }
        });
        await ProductUsers.create({
            userId:user.id,
            productId:product.id,
            quantity:quantity
        });
        product.save();
        res.redirect("/cart");
    }
     catch(err) {
         console.log(err);
     }
}

exports.get_cart = async function(req,res){
    const email = req.session.email;
    try {
        const user = await User.findOne({
            where:{
                email:email
            }
        });
        const userProducts = await Product.findAll({
            include:{
                model:User,
                where: {id: user.id} 
            },
            raw: true
        });
        const productUsers = await ProductUsers.findAll({
            where:{
                userId:user.id
            },
            raw: true
        });
        var totalPrice=[];
        var countCart=0;
        var total=0;
        const product = await Product.findAll();
        for(i=0;i<userProducts.length;i++){
            totalPrice.push(productUsers[i].quantity * productUsers[i].productPrice);
            total = total + totalPrice[i]
            countCart += productUsers[i].quantity;
        }
        
        
        
        res.render("users/cart", {
                title: "Cart",
                userProducts: userProducts,
                productUsers:productUsers,
                totalPrice:totalPrice,
                name: user.name,
                surname: user.surname,
                countCart: countCart,
                cartTotal: total
            });
        }        
    catch(err) {
        console.log(err);
    }
}

exports.post_cart = async function(req,res){
    const submit = req.body.submit;
    const email = req.session.email;
    const user = await User.findOne({
        where:{
            email:email
        }
    });
    
    const userProducts = await Product.findAll({
        include:{
            model:User,
            where: {id: user.id} 
        }
    });
    try {
        const product = await Product.findAll({});
        const user = await User.findOne({
            where:{
                email:email
            }
        });
        var totalPrice=[];
        const productUsers = await ProductUsers.findAll();
            for(i=0;i<product.length;i++){
                for(j=0;j<productUsers.length;j++){
                    if(submit=="update"){
                        if(productUsers[j].productId==product[i].id){
                            const quantity = req.body.quantity;
                            console.log(productUsers)
                            productUsers[j].quantity=quantity[j];
                            totalPrice.push(productUsers[j].quantity * productUsers[j].productPrice);
                            await productUsers[j].save();
                        }
                    }
                    else if(submit==[i]){
                           await user.removeProduct([i]);
                    }
                    else if(submit=="deleteAll"){
                        await user.removeProduct(i)
                    }
                }
            }
            res.redirect("/cart");
    }
     catch(err) {
         console.log(err);
     }
}

exports.get_checkout = async function(req,res){
    const email = req.session.email;
    try {
        const product = await Product.findAll({});
        const user = await User.findOne({
            where:{
                email:email
            }
        });
        const userProducts = await Product.findAll({
            include:{
                model:User,
                where: {id: user.id} 
            },
            raw: true
        });
        const productUsers = await ProductUsers.findAll({raw:true});
        var total=0;
        var totalPrice=[];
        var countCart=0;
        for(i=0;i<userProducts.length;i++){
            totalPrice.push(productUsers[i].quantity * productUsers[i].productPrice);
            total = total + totalPrice[i]
        }
        if(total>500){
            handling=0;
        }
        else{
            handling=50;
        }
        const kdv = total*8/100;
        totalKdv = total+kdv;
        const totalFinal= totalKdv+handling;
            countCart=0;
            for (let i = 0; i<productUsers.length; i++) {
                countCart += productUsers[i].quantity;
            }
        res.render("users/checkout", {
                title: "Checkout",
                name: user.name,
                surname: user.surname,
                address:user.address,
                city:user.city,
                country:user.country,
                postcode:user.postcode,
                email:user.email,
                phone:user.phone,
                resetToken: user.resetToken,
                countCart: countCart,
                name: user.name,
                surname: user.surname,
                countCart: countCart,
                userProducts: userProducts,
                totalPrice:totalPrice,
                cartTotal: total,
                handlingFee: handling,
                totalFinal: totalFinal

            });
        }        
    catch(err) {
        console.log(err);
    }
}

exports.post_checkout = async function(req,res){
    const email = req.session.email;
    const user = await User.findOne({
        where:{
            email:email
        }
    });
    
    const userProducts = await Product.findAll({
        include:{
            model:User,
            where: {id: user.id} 
        }
    });
    try {
        const product = await Product.findAll({});
        const user = await User.findOne({
            where:{
                email:email
            }
        });
        
        res.redirect("/order");
    }
     catch(err) {
         console.log(err);
     }
}

exports.get_order = async function(req,res){
    const email = req.session.email;
    const product = await Product.findAll({});
        const user = await User.findOne({
            where:{
                email:email
            }
        });
        const userProducts = await Product.findAll({
            include:{
                model:User,
                where: {id: user.id} 
            },
            raw: true
        });
        const orderRandom = Math.random()*99999+10000;
        const orderId = Math.round(orderRandom);
        const ticketRandom = Math.random()*999999999+100000000;
        const ticketId = Math.round(ticketRandom);
         emailService.sendMail({
             from: config.email.from,
             to: email,
             subject: "Order Details",
             html: `
                <h5>Order No: ${orderId}</h5>
                <p>You can enter by showing your "Ticket ID" below to the ticket office.</p>
                <h6>Ticket ID: ${ticketId}</h6>
             `
         });
    try {
        const productUsers = await ProductUsers.findAll({raw:true});
        var total=0;
        var totalPrice=[];
        for(i=0;i<productUsers.length;i++){
            totalPrice.push(productUsers[i].quantity * productUsers[i].productPrice);
            total = total + totalPrice[i]
        }
        res.render("users/order", {
            title: "Order",
            userProducts: userProducts,
            productUsers: productUsers,
            totalPrice: total,
            csrfToken: req.csrfToken()
        });
    }
    catch(err) {
        console.log(err);
    }
}
 