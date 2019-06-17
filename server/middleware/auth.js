require("dotenv").load();
const jwt = require("jsonwebtoken");
const conn = require("../sqlconnection/connection");


//this orders user to log in befor an action
exports.loginRequired = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) {
                console.log(err)
            }
            if (decoded) {
                next();
            }
            else {
                return res.status(401).json({
                    message: "please login first"
                })
            }
        })
    } catch (e) { 
        return res.status(401).json({
            message: "please login first"
        })
    }


}

//it checks if user is admin to give some permission
exports.adminRequired = function (req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    conn.query('select *from user where id=' + req.params.user, function (error, result, fields) {
        if (error) {
            console.log(error);
        }
        //this protects if hacker tries to access an id outside of the web browser
        if (result.length > 0) {
            jwt.verify(token, process.env.SECRET, function (err, decoded) {
                if (err) {
                    throw err;
                }
                if (decoded && result[0].isAdmin > 0) {
                    next();
                } else {
                    return next({
                        status: 401,
                        message: "not authorized"
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
}

//it checks if user is editor to give some permission
exports.editorRequired = function (req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    conn.query('select *from user where id=' + req.params.user, function (error, result, fields) {
        if (error) {
            console.log(error);
        }
        //this protects if hacker tries to access an id outside of the web browser
        if (result.length > 0) {
            jwt.verify(token, process.env.SECRET, function (err, decoded) {
                if (decoded && result[0].editor > 0 || result[0].isAdmin > 0) {
                    next();
                } else {
                    return next({
                        status: 401,
                        message: "not authorized"
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

}
exports.ownerRequired = function (req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    conn.query('select *from user where id=' + req.params.user, function (error, result, fields) {
        if (error) throw error;

        //this protects if hacker tries to access an id outside of the web browser
        if (result.length > 0) {
            
            jwt.verify(token, process.env.SECRET, function (err, decoded) {
                if (decoded && decoded.userId === req.params.id || result[0].editor > 0 || result[0].isAdmin > 0) {
                    next();
                } else {
                    return next({
                        status: 401,
                        message: "not uathorized"
                    })
                }
            })
        } else {
            return next({
                status: 401,
                message: "not uathorized"
            })
        }
    })

}