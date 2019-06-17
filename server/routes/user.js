const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const conn = require("../sqlconnection/connection");
const jwt = require("jsonwebtoken");
const { adminRequired, editorRequired, loginRequired } = require("../middleware/auth");


//sign up 
router.post("/signup", function (req, res, next) {
    try { 
        //encript the password of the user
        bcrypt.hash(req.body.password, 10, function (err, hash) {
            if (err) {
                throw err;
            } else {
                const user = [{
                    fname: req.body.fname,
                    lname: req.body.lname,
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                    isAdmin: req.body.isAdmin,
                    editor: req.body.editor
                }]
                
                // and create it the user's data
                conn.query('insert into user set?', user, function (error, result, field) {
                    if (error) {
                        return res.status(400).json({
                            message: "email/username has already taken please try another one",
                        })
    
                    } else {

                        let token = jwt.sign({
                            email: result.email,
                            id: result.id,
                            password: result.password,
                            email: result.emaail,
                            username: result.username,
                        }, process.env.SECRET);
                        return res.status(200).json({
                            token,
                            result
                        })
                    }
                })
            }
    
        })
    } catch (e) { 
        return res.status(400).json({
            message: "email/username has already taken please try another one",
        })
    }
    
});

//sign in
router.post("/signin", function (req, res, next) {
    try {
        //read email from the browser input email 
        let email = req.body.email
        conn.query('select *from user where email =?', [email], function (error, result, fields) {
            if (error) {
                throw error;
                //if the email exists 
            } if (result && result.length > 0) {
                //check the password
                bcrypt.compare(req.body.password, result[0].password, function (err, response) {
                    if (err) {
                        throw err;
                    } else if (response) {
                        let token = jwt.sign({
                            email: result[0].email,
                            id: result[0].id,
                            username: result[0].username,
                            password: result[0].password,
                            isAdmin: result[0].isAdmin,
                            editor: result[0].editor
                        }, process.env.SECRET);
                        return res.status(200).json({
                            token,
                            email: result[0].email,
                            id: result[0].id,
                            username: result[0].username,
                            password: result[0].password,
                            isAdmin: result[0].isAdmin,
                            editor: result[0].editor
                        })
                    } else {
                        return res.status(400).json({
                            message: "email/password is invalid"
                        })
                    }
                })
            }
            else {
                return res.status(400).json({
                    message: 'The email you entered is not exist'
                })
            }
        })
    } catch (e) {
        return res.status(400).json({
            message: "email/password is invalid"
        })
    }

})

//get one single user and this section can only access the admin
router.post("/user/:user/", loginRequired, adminRequired, function (req, res, next) {
    conn.query('select *from user where id=' + req.params.user, function (error, result, fields) {
        if (error) throw error;
        if (result) {
            console.log(result[0].username);
        }
    })

    //Enter the email of the and check it if it exists or not 
    let email = req.body.email
    conn.query('select *from user where email =?', [email], function (errors, results, fields) {
        if (errors) throw errors;

        //if user exists show it's data 
        if (results.length > 0) {
            return res.status(200).json({
                id: results[0].id,
                fname: results[0].fname,
                lname: results[0].lname,
                email: results[0].email,
                username: results[0].username,
                isAdmin: results[0].isAdmin,
                editor: results[0].editor
            })
        } else {
            return res.status(400).json({
                message: 'The email you have entered is not right, please try again'
            })
        }
    })
})

//updata user's permission to role of an admin 
//if admin column of the table user is equal to 0 it means he/she is not admin
//but if it is equal to 1 it means that he/she is admin
router.put("/user/:user/admin/:id",loginRequired, adminRequired,  function (req, res, next) {
    conn.query('select *from user where id=' + req.params.user, function (error, result, fields) {
        if (error) throw error;

        if (result.length > 0) {
            console.log(result[0].username)
        } else {
            return res.status(400).json({
                message: "you didn't success to change the role of the user"
            })
        }
    })

    conn.query('select *from user where id=?', [req.params.id], function (errors, results, fields) {
        if (errors) throw errors;

        if (results[0].isAdmin > 0) {
            conn.query('UPDATE user SET isAdmin=0 WHERE id=?', [req.params.id], function (error, result, field) {
                if (error) {
                    throw error;
                }
                if (result) {
                    return res.status(200).json({
                        result,
                        message: "you expelled the role of the admin"
                    })
                } else {
                    return res.status(400).json({
                        message: "there is something went wrong"
                    })
                }
            })
        } else if (results[0].isAdmin == 0) {
            conn.query('UPDATE user SET isAdmin=1 WHERE id=?', [req.params.id], function (error, result, field) {
                if (error) {
                    throw error;
                }
                if (result) {
                    return res.status(200).json({
                        result,
                        message: "you have given a permission to work as admin"
                    })
                } else {
                    return res.status(400).json({
                        message: "you didn't success to change the role of the user"
                    })
                }
            })
        }else{
            console.log("something went wrong");
        }
    })
})

//updata user's permission to role of editor
//if editor column of the table user is equal to 0 it means he/she is not editor
//but if it is equal to 1 it means that he/she is editor
router.put("/user/:user/editor/:id", loginRequired, adminRequired, function (req, res, next) {
    conn.query('select *from user where id=' + req.params.user, function (error, result, fields) {
        if (error) throw error;

        if (result.length > 0) {
            console.log(result[0].email)
        }
    })
    conn.query('select *from user where id=?', [req.params.id], function (errors, results, fields) {
        if (errors) throw errors;
        
        if (results[0].editor > 0) {
            conn.query('UPDATE user SET editor=0 WHERE id=?', [req.params.id], function (error, result, field) {
                if (error) {
                    throw error;
                }
                if (result) {
                    return res.status(200).json({
                        result,
                        message: "you expelled the role of editor"
                    })
                } else {
                    return res.status(400).json({
                        message: "you didn't success to change the role of the user"
                    })
                }
            })
        } else if (results[0].editor == 0) {
            conn.query('UPDATE user SET editor=1 WHERE id=?', [req.params.id], function (error, result, field) {
                if (error) {
                    throw error;
                }
                if (result) {
                    return res.status(200).json({
                        result,
                        message: "you have given a permission to work as editor"
                    })
                } else {
                    return res.status(400).json({
                        message: "you didn't success to change the role of the user"
                    })
                }
            })
        }
    })
})


module.exports = router