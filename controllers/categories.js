const Product = require("../models/product");
const Category = require("../models/category");
const User = require("../models/user");
const Title = require("../models/title");
const Ses = require("../models/ses");
const ProductUsers = require("../models/productusers");


exports.get_concert = async function(req,res){
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
                where: {id:1} 
            },
            raw: true,
            offset:6,
            limit:6
        });
        const productCategory3 = await Product.findAll({
            include:{
                model:Category,
                where: {id:1} 
            },
            raw: true,
            offset:12,
            limit:6
        });
        const productSession = await Ses.findAll();
        res.render("categories/concert", {
            title: "Concert",
            products:products,
            countCart:countCart,
            category:category,
            productCategory1: productCategory1,
            productCategory2: productCategory2,
            productCategory3: productCategory3,
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
            const userProducts = await Product.findAll({
                include:{
                    model:User,
                    where:{id:user.id}
                },
                raw: true
            });
            countCart = userProducts.length; 
        
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
                    where: {id:1} 
                },
                raw: true,
                offset:6,
                limit:6
            });
            const productCategory3 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:1} 
                },
                raw: true,
                offset:12,
                limit:6
            });
            const productSession = await Ses.findAll();
            const productUsers = await ProductUsers.findAll({raw:true});
            countCart=0;
            for (let i = 0; i<productUsers.length; i++) {
                countCart += productUsers[i].quantity;
            }
            res.render("categories/concert", {
                title: "Concert",
                products:products,
                countCart:countCart,
                name:user.name,
                surname:user.surname,
                category:category,
                productCategory1: productCategory1,
                productCategory2:productCategory2,
                productCategory3:productCategory3,
                productSession:productSession,
                categoryTitle: categoryTitle
            })
        }
        
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_cinema = async function(req,res){
    try {
        const category = await Category.findAll({raw:true});
        let countCart;
        if(!req.session.email){
        const categoryTitle = await Title.findAll({raw:true});
        const products = await Product.findAll({raw:true});
        const productCategory1 = await Product.findAll({
            include:{
                model:Category,
                where: {id:2} 
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
            offset:6,
            limit:6
        });
        const productCategory3 = await Product.findAll({
            include:{
                model:Category,
                where: {id:2} 
            },
            raw: true,
            offset:12,
            limit:6
        });

        const productSession = await Ses.findAll();
        res.render("categories/cinema", {
            title: "Cinema",
            products:products,
            countCart:countCart,
            category:category,
            productCategory1: productCategory1,
            productCategory2: productCategory2,
            productCategory3: productCategory3,
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
            const userProducts = await Product.findAll({
                include:{
                    model:User,
                    where: {id: user.id} 
                },
                raw: true
            });
            countCart = userProducts.length; 
        
            const categoryTitle = await Title.findAll({raw:true});
            const products = await Product.findAll({raw:true});
            const productCategory1 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:2} 
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
                offset:6,
                limit:6
            });
            const productCategory3 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:2} 
                },
                raw: true,
                offset:12,
                limit:6
            });
            const productSession = await Ses.findAll();
            const productUsers = await ProductUsers.findAll({raw:true});
            countCart=0;
            for (let i = 0; i<productUsers.length; i++) {
                countCart += productUsers[i].quantity;
            }
            res.render("categories/cinema", {
                title: "Cinema",
                products:products,
                countCart:countCart,
                name:user.name,
                surname:user.surname,
                category:category,
                productCategory1: productCategory1,
                productCategory2:productCategory2,
                productCategory3:productCategory3,
                productSession:productSession,
                categoryTitle: categoryTitle
            })
        }
        
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_theatre = async function(req,res){
    try {
        const category = await Category.findAll({raw:true});
        let countCart;
        if(!req.session.email){
        const categoryTitle = await Title.findAll({raw:true});
        const products = await Product.findAll({raw:true});
        const productCategory1 = await Product.findAll({
            include:{
                model:Category,
                where: {id:3} 
            },
            raw: true,
            limit:6
        });
        const productCategory2 = await Product.findAll({
            include:{
                model:Category,
                where: {id:3} 
            },
            raw: true,
            offset:6,
            limit:6
        });
        const productCategory3 = await Product.findAll({
            include:{
                model:Category,
                where: {id:3} 
            },
            raw: true,
            offset:12,
            limit:6
        });
        const productSession = await Ses.findAll();
        res.render("categories/theatre", {
            title: "Theatre",
            products:products,
            countCart:countCart,
            category:category,
            productCategory1:productCategory1,
            productCategory2:productCategory2,
            productCategory3:productCategory3,
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
            const userProducts = await Product.findAll({
                include:{
                    model:User,
                    where: {id: user.id} 
                },
                raw: true
            });
            countCart = userProducts.length; 
        
            const categoryTitle = await Title.findAll({raw:true});
            const products = await Product.findAll({raw:true});
            const productCategory1 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:3} 
                },
                raw: true,
                limit:6
            });
            const productCategory2 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:3} 
                },
                raw: true,
                offset:6,
                limit:6
            });
            const productCategory3 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:3} 
                },
                raw: true,
                offset:12,
                limit:6
            });
            const productSession = await Ses.findAll();
            const productUsers = await ProductUsers.findAll({raw:true});
            countCart=0;
            for (let i = 0; i<productUsers.length; i++) {
                countCart += productUsers[i].quantity;
            }
            res.render("categories/theatre", {
                title: "Theatre",
                products:products,
                countCart:countCart,
                name:user.name,
                surname:user.surname,
                category:category,
                productCategory1: productCategory1,
                productCategory2:productCategory2,
                productCategory3:productCategory3,
                productSession:productSession,
                categoryTitle: categoryTitle
            })
        }
        
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_musical = async function(req,res){
    try {
        const category = await Category.findAll({raw:true});
        let countCart;
        if(!req.session.email){
        const categoryTitle = await Title.findAll({raw:true});
        const products = await Product.findAll({raw:true});
        const productCategory1 = await Product.findAll({
            include:{
                model:Category,
                where: {id:4} 
            },
            raw: true,
            limit:6
        });
        const productCategory2 = await Product.findAll({
            include:{
                model:Category,
                where: {id:4} 
            },
            raw: true,
            offset:6,
            limit:6
        });
        const productCategory3 = await Product.findAll({
            include:{
                model:Category,
                where: {id:4} 
            },
            raw: true,
            offset:12,
            limit:6
        });
        const productSession = await Ses.findAll();
        res.render("categories/musical", {
            title: "Musical",
            products:products,
            countCart:countCart,
            category:category,
            productCategory1:productCategory1,
            productCategory2:productCategory2,
            productCategory3:productCategory3,
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
            const userProducts = await Product.findAll({
                include:{
                    model:User,
                    where: {id: user.id} 
                },
                raw: true
            });
            countCart = userProducts.length; 
        
            const categoryTitle = await Title.findAll({raw:true});
            const products = await Product.findAll({raw:true});
            const productCategory1 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:4} 
                },
                raw: true,
                limit:6
            });
            const productCategory2 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:4} 
                },
                raw: true,
                offset:6,
                limit:6
            });
            const productCategory3 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:4} 
                },
                raw: true,
                offset:12,
                limit:6
            });
            const productSession = await Ses.findAll();
            const productUsers = await ProductUsers.findAll({raw:true});
            countCart=0;
            for (let i = 0; i<productUsers.length; i++) {
                countCart += productUsers[i].quantity;
            }
            res.render("categories/musical", {
                title: "Musical",
                products:products,
                countCart:countCart,
                name:user.name,
                surname:user.surname,
                category:category,
                productCategory1: productCategory1,
                productCategory2:productCategory2,
                productCategory3:productCategory3,
                productSession:productSession,
                categoryTitle: categoryTitle
            })
        }
        
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_other = async function(req,res){
    try {
        const category = await Category.findAll({raw:true});
        let countCart;
        if(!req.session.email){
        const categoryTitle = await Title.findAll({raw:true});
        const products = await Product.findAll({raw:true});
        const productCategory1 = await Product.findAll({
            include:{
                model:Category,
                where: {id:5} 
            },
            raw: true,
            limit:6
        });
        const productCategory2 = await Product.findAll({
            include:{
                model:Category,
                where: {id:5} 
            },
            raw: true,
            offset:6,
            limit:6
        });
        const productCategory3 = await Product.findAll({
            include:{
                model:Category,
                where: {id:5} 
            },
            raw: true,
            offset:12,
            limit:6
        });
        const productSession = await Ses.findAll();
        res.render("categories/other", {
            title: "Other Performing Arts",
            products:products,
            countCart:countCart,
            category:category,
            productCategory1:productCategory1,
            productCategory2:productCategory2,
            productCategory3:productCategory3,
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
            const userProducts = await Product.findAll({
                include:{
                    model:User,
                    where:{id:user.id}
                },
                raw: true
            });
            countCart = userProducts.length; 
        
            const categoryTitle = await Title.findAll({raw:true});
            const products = await Product.findAll({raw:true});
            const productCategory1 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:5} 
                },
                raw: true,
                limit:6
            });
            const productCategory2 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:5} 
                },
                raw: true,
                offset:6,
                limit:6
            });
            const productCategory3 = await Product.findAll({
                include:{
                    model:Category,
                    where: {id:5} 
                },
                raw: true,
                offset:12,
                limit:6
            });
            const productSession = await Ses.findAll();
            const productUsers = await ProductUsers.findAll({raw:true});
            countCart=0;
            for (let i = 0; i<productUsers.length; i++) {
                countCart += productUsers[i].quantity;
            }
            res.render("categories/other", {
                title: "Other Performing Arts",
                products:products,
                countCart:countCart,
                name:user.name,
                surname:user.surname,
                category:category,
                productSession:productSession,
                productCategory1: productCategory1,
                productCategory2:productCategory2,
                productCategory3:productCategory3,
                categoryTitle: categoryTitle
            })
        }
        
    }
    catch(err) {
        console.log(err);
    }
}