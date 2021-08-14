const mongoose = require("mongoose")
const validator = require("validator")


const productSchema =  new  mongoose.Schema({
    name :{
        type : String ,
        required : true,
        minlength :3,
        unique : true
    },
    price :{
        type : String ,
        required : true,
    },

})

const Product =new  mongoose.model("Product", productSchema)

module.exports = Product