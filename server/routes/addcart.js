const express = require("express");
const router = express.Router();
const conn = require("../sqlconnection/connection");
const { loginRequired, ownerRequired } = require("../middleware/auth");



//create addcart to allow user to make add cart
router.post("/:product/:user/addcart", loginRequired, function (req, res, next) {
    //read the user id that wanna to make add cart
    conn.query('select *from user where id=' + req.params.user, function (error, result, field) {
        if (error) {
            console.log(error);
        }
        if (result) {
            console.log(result[0].username);
        } else {
            return next({
                status: 404,
                message: "Not Found"
            })
        }
    });

    //select item from table that you need to addcart it 
    conn.query('select *from product where id=' + req.params.product, function (error, result, fields) {
        if (error) {
            throw error;
        }
        if (result) {
            const product = {
                userId: req.params.user,
                name: result[0].name,
                price: result[0].price,
                image: result[0].image,
                size: result[0].size,
                color: result[0].color,
                description: result[0].description,
                quantity: 1,
                productId: req.params.product
            }

            //add to the add cart the value you have selected 
            conn.query('insert into addcart set?', [product], function (errors, results, field) {
                if (errors) {
                    console.log(errors);
                }
                if (results) {
                    return res.status(200).json({
                        results
                    })
                } else {
                    return next({
                        status: 400,
                        message: "You have the same item like this in the addcart"
                    })
                }
            })
        } else {
            return next({
                status: 400,
                message: "You have the same item like this in the addcart"
            })
        }
    })
})

//get all addcarts that have the same userId === id 
//this for user no one can see any thing except the owner of it, even editor or admin cann't see it that
router.get("/:user", loginRequired, ownerRequired, function (req, res, next) {

    conn.query('select *from user where id=' + req.params.user, function (error, result, field) {
        if (error) throw error;

        //check if the user have made before shopping if it is, show the the shopping user done
        if (result.length > 0) {
            //it gives the user only if user id is equal addcart userId 
            //and the user can't get other person's addcart information
            conn.query('select *from addcart where userId=' + req.params.user, function (errors, results, fields) {
                if (errors) throw errors;

                if (results.length > 0) {
                    return res.status(200).json({
                        results
                    })
                } else {
                    //if user doesn't make any shopping before the user will get this message 
                    return next({
                        status: 404,
                        message: "Empty, please buy something and get low price with high quality and best services"
                    })
                }
            })
        } else {
            return next({
                status: 404,
                message: "something went wrong"
            })
        }
    })
});


//get one item from addcarts that have the same userId === id and unique addcartId
//this for user no one can change any thing except the owner of it even editor or admin cann't do that
router.get("/:user/:addcartId", loginRequired, ownerRequired, function (req, res, next) {
    conn.query("select *from user where id=" + req.params.user, function (error, result, field) {
        if (error) throw error;

        //get the user and check it
        if (result.length > 0) {
            console.log(result[0].username);
        } else {
            return next({
                status: 400,
                message: "This is not valid number"
            })
        }
    })

    //it gives the user only if user id is equal addcart userId 
    //and the user can't get other person's addcart information
    conn.query('select *from addcart where addcartId='+req.params.addcartId, function (error, result, field) {
        if (error) throw error;

        if (result.length > 0) {
            return res.status(200).json({
                result
            })
        } else {
            return next({
                message: "This file doesn't exist any more"
            })
        }
    })
})


//update the addcart if something went wrong 
//and the user can't get other person's addcart information to modify that information 
router.put("/:user/:addcartId", loginRequired, ownerRequired, function (req, res, next) {

    conn.query("select *from user where id=" + req.params.user, function (error, result, field) {
        if (error) throw error;

        if (result[0].username) console.log(result[0].username);

        //the item from the table that have the user have a permission to change something 
        const addcart = [{
            quantity: req.body.quantity,
            size: req.body.size,
        }]

        //query that changes what user wants to modify it from the item that the user have a permission to change it 
        conn.query("update addcart set? where addcartId=" + req.params.addcartId, addcart, function (error, result, field) {
            if (error) throw error;

            //if the user have changed something from item the user gets a message from the server
            //that message was typed below 
            if (result.affectedRows > 0) {
                return res.status(200).json({
                    message: "you successfully updated your shopping cart item"
                })
            } else {
                //if the user doesn't do any thing the user gets a message from server
                //that message was typed below 
                return next({
                    status: 400,
                    message: "sorry, you didn't updated nothing"
                })
            }
        })

    })
})


//delete the addcart if something went wrong 
//and the user can't get other person's addcart information to modify that information 
router.delete("/:user/:addcartId", loginRequired, ownerRequired, function (req, res, next) {
    
    conn.query('select *from user where id=' + req.params.user, function (error, result, field) {
        if (error) throw error;

        if (result[0].id) {
            console.log(result[0].username);
        } else {
            return next({
                status: 400,
                message: "There is something went wrong please try again"
            })
        }
    })
    //delete the item from the addcart and selected addcart id 
    conn.query('delete from addcart where addcartId=' + req.params.addcartId, function (error, result, field) {
        if (error) throw error;

        //if user deleted something the server will give the message below
        if (result.affectedRows > 0) {
            return res.status(200).json({
                message: "Successfully deleted"
            })
        } else {
            // if the user doesn't deleted anything, the user will get the message below
            return next({
                status: 400,
                message: "You have nothing to delete"
            })
        }
    })
})
module.exports = router;