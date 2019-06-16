require("dotenv").config();
const express = require("express");
const cors =  require("cors");
const bodyparser = require("body-parser");
const app = express();
const port = 3001;
const userRoutes = require("./routes/user");
const Ordered = require("./routes/ordered");
const Product = require("./routes/product");
const addcart = require("./routes/addcart");




app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(cors());

app.use("/market", userRoutes);

app.use("/market/order", Ordered);
app.use("/market/product", Product);
app.use("/market/addcart", addcart);


app.use(function(req, res, next){
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use(function(error, request, response, next){
    return response.status(error.status || 500).json({
        error: {
            message: error.message || "OOps something went wrong"
        }
    })
})

app.listen(port, function(){
    console.log(`server has started ${port}`);
})