const express = require("express");
const router = express.Router();
const conn = require("../sqlconnection/connection");
const { loginRequired, editorRequired } = require("../middleware/auth")

//get products all that is visible for everyone who visits the website
router.get("/", function (req, res, next) {
    conn.query('select * from product order by id DESC', function (error, result, fields) {
        if (error) {
            throw error;
        }
        if (result.length > 0) {
            res.status(200).json({
                result
            })
        } else {
            return next({
                message: "Not Found",
                status: 404
            })
        }
    })
})

//search any item in the table 
router.post("/", function(req, res, next){

    conn.query(` select *from product where name like '%${req.body.search}%'`+
    ` or description LIKE '%${req.body.search}%'`+
    ` or color LIKE '%${req.body.search}%'`+
    ` or size LIKE '%${req.body.search}%'`+
    ` or price LIKE '%${req.body.search}%'`,
     function(error, result, field){
        if(error) throw error;

        if(result.length > 0){
            res.status(200).json({
                result
            })
        }else{
            console.log(result)
            return next({
                status: 404,
                message: "Result Not Found"
            })
        }
    })
})



//add a post and checking if the user registered as admin or editor, if user is not both can't post 
router.post("/:user", loginRequired, editorRequired, function (req, res, next) {
    try {
        //read id from  user 
        let id = req.params.user

        conn.query('select *from user where id=?', [id], function (error, result, fields) {
            if (error) {
                console.log(error);
            }
            if (result) {
                console.log(result[0].username);
            }
        })
        //create product item
        const product = [{
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
            size: req.body.size,
            color: req.body.color,
            typeOfGoods: req.body.typeOfGoods,
            typeOfPerson: req.body.typeOfPerson,
            typeOfWhere: req.body.typeOfWhere
        }]
        //create product 
        conn.query('insert into product set?', product, function (error, result, fields) {
            if (error) {
                throw error;
            }
            if (result) {
                return res.status(200).json({
                    product
                })
            }
        })
    } catch (e) {
        return next({
            status: 400,
            message: "wrong information"
        })
    }

});

//get one single product that you have selected
router.get("/:product", function (req, res, next) {
    try {
        //select product one single product
        conn.query('select *from product where id=' + req.params.product, function (error, result, fields) {
            if (error) {
                throw error;
            }
            if ( result && result.length > 0) {
                return res.status(200).json({
                    result
                })
            } else {
                return next({
                    message: "Not Found",
                    status: 404
                })
            }
        })
    } catch (e) {
        return next({
            message: "Not Found",
            status: 404
        })
    }

});

//update item and check if the user is admin or editor
router.put("/:product/:user", loginRequired, editorRequired, function (req, res, next) {
    try {
        conn.query('select *from product where id=' + req.params.product, function (error, result, fields) {
            if (error) {
                throw error;
            }
            if (result) {
                //creating seprate variable for updating
                const product = [{
                    name: req.body.name,
                    quantity: req.body.quantity,
                    price: req.body.price,
                    description: req.body.description,
                    image: req.body.image,
                    size: req.body.size,
                    color: req.body.color,
                    typeOfGoods: req.body.typeOfGoods,
                    typeOfPerson: req.body.typeOfPerson,
                    typeOfWhere: req.body.typeOfWhere
                }]
                //updating data from user 
                conn.query('update product set? where id=' + req.params.product, product, function (errors, results, field) {
                    if (errors) {
                        throw error;
                    }
                    if (results.affectedRows > 0) {
                        return res.status(200).json({
                            message: "Successfully updated"
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
        });
        //it reads user's id and if the user is the admin/editor can update this post
        conn.query('select * from user where id=' + req.params.user, function (error, result, field) {
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
        })
    } catch (e) {
        return next({
            status: 404,
            message: "Not Found"
        })
    }

});

//deleting item and permission is who can delete this and allowed only admin or editor
router.delete("/:product/:user", loginRequired, editorRequired, function (req, res, next) {
    try {
        //read id from user
        conn.query('select *from user where id=' + req.params.user, function (error, result, fields) {
            if (error) {
                throw error;
            }
            if (result) {
                console.log(result[0].username)
            } else {
                return next({
                    message: "Someone trying"
                })
            }
        })
        //delete editor selected id
        conn.query('delete from product where id=' + req.params.product, function (errors, results, field) {
            if (errors) {
                throw error;
            }
            if (results.affectedRows > 0) {
                return res.status(200).json({
                    message: "Successfully deleted"
                })
            } else {
                return next({
                    status: 404,
                    message: "Not Found"
                })
            }
        })

    } catch (e) {
        return next({
            status: 404,
            message: "Not Found"
        })
    }

})



module.exports = router;