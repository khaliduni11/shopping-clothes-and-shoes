const express = require("express");
const conn = require("../sqlconnection/connection");
const router = express.Router();
const { editorRequired, loginRequired } = require("../middleware/auth");


//creating order that user can order 
router.post("/:addcartId/:user/order", loginRequired, function (req, res, next) {
    //read the id of the user wanna to order an item/items
    conn.query('select *from user where id=' + req.params.user, function (error, result, field) {
        if (error) {
            throw error;
        }
        if (result[0].id) {
            console.log(result[0].username);
        } else {
            return next({
                status: 404,
                message: "Not Found"
            })
        }
    });
    //read from item id
    conn.query('select *from addcart where addcartId=' + req.params.addcartId, function (error, result, fields) {
        if (error) {
            throw error;
        }
        if (result[0].addcartId) {
            //create seprated variable for inserting ordered table
            const addcart = {
                country: req.body.country,
                state: req.body.state,
                city: req.body.city,
                phoneNumber: req.body.phoneNumber,
                street: req.body.street,
                houseNumber: req.body.houseNumber,
                name: result[0].name,
                price: result[0].price,
                image: result[0].image,
                size: result[0].size,
                color: result[0].color,
                description: result[0].description,
                quantity: result[0].quantity,
                username: req.body.username
            }
            //insert ordered table 
            conn.query('insert into ordered set?', [addcart], function (errors, results, field) {
                if (errors) {
                    throw error;
                }
                if (results) {
                    return res.status(200).json({
                        message: result[0].name
                    })
                } else {
                    return next({
                        status: 404,
                        message: "Not Found"
                    })
                }
            })
        } else {
            return next({
                status: 404,
                message: "Not Found"
            })
        }
    })
})


//get all ordered goods from users to deliver data
//and this needs permission for an admin or editor
router.get("/:user/", loginRequired, editorRequired, function (req, res, next) {

    conn.query('select *from user where id=' + req.params.user, function (error, result, field) {
        if (error) {
            throw error;
        }
        if (result) {
            console.log(result[0].username)
        } else {
            return next({
                status: 404,
                message: "Not Found"
            })
        }
    })
    //show all data from ordered and sort them both as they delivered or ordered as data and time
    conn.query('select * from ordered order by delivered ASC, currentDate ASC ', function (errors, results, fields) {
        if (errors) {
            throw error;
        }
        if (results) {
            return res.status(200).json({
                results
            })
        } else {
            return next({
                status: 404,
                message: "Not Found"
            })
        }
    })
});


//get one username order to see if it is delivered or not 
//and this needs permission for an admin or editor
router.post("/:user/search",loginRequired, editorRequired, function(req, res, next){
    conn.query("select *from user where id="+req.params.user, function(error, result, field){
        if(error) throw error;

        if(result.length > 0){
            console.log(result[0].username)
        }else{
            return next({
                status: 404,
                message: "Not Found"
            })
        }
    })
    conn.query("select *from ordered where username=?", [req.body.username], function(error, result, field){
        if(error) throw error;

        if(result.length > 0){
            return res.status(200).json({
                result
            })
        }else{
            return next({
                status: 404,
                message: "This username never made any order before"
            })
        }
    })
})


//if the item is delivered mark it as delivered
//and this needs permission for an admin or editor
router.post("/:user/:order/delivered",loginRequired, editorRequired, function (req, res, next) {

    conn.query('select *from user where id=' + req.params.user, function (error, result, field) {
        if (error) {
            throw error;
        }
        if (result) {
            console.log(result[0].username);
        }else{
            return next({
                status: 404,
                message: "Not Found"
            })
        }
    });

    //this changes to delivered from 0 to 1
    //if delivered is equal one it means that is delivered
    conn.query('update ordered set delivered=1 where orderedId='+req.params.order, function (error, result, field) {
        if (error) {
            throw error;
        }

        //if successfully delivered the user gets this message below
        if (result.affectedRows > 0) {
            return res.status(200).json({
                message: "is registered as delivered"
            })
        }
    })

})

module.exports = router;