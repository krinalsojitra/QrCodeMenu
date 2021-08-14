const connection = require("../connection.js")
const express = require("express")
const app = express()
app.use(express.json())
const port = process.env.PORT || 8000;
const Product = require("../model/product.model")

app.post("/product", async(req, res) => {
    try{
         const product = new Product(req.body)
         const createProduct =await product.save()
         res.status(201).send(createProduct)
    }catch(e)
    {
        res.status(400).send(e)
    }
})


app.get("/product",async(req,res) =>{
    try{
        const productData =await Product.find()
        res.status(201).send(productData)
    }catch(e){
    res.status(400).send(e)

    }
})

app.get("/product/:id",async(req,res) =>{
    try{
  
        const _id = req.params.id;
        const productData =await Product.findById(_id)
        console.log( productData)
        if(!productData)
        {
            res.status(400).send(e)
        }
        else{
            res.status(201).send(productData)
        }
      
    }catch(e){
    res.status(400).send(e)

    }
})

app.patch("/product/:id",async(req,res) =>{
    try{
        const _id = req.params.id;
        const updateProduct =await Product.findByIdAndUpdate(_id,req.body,{
            new: true
        })
        res.status(201).send(updateProduct)
      
    }catch(e){
    res.status(400).send(e)

    }
})
app.delete("/product/:id",async(req,res) =>{
    try{
        const deleteProduct =await Product.findByIdAndDelete(req.params.id)
        if(!req.params.id)
        {
            return res.status(400).send()
        }
        res.status(201).send(deleteProduct)
      
    }catch(e){
    res.status(400).send(e)

    }
})


app.listen(port, () => {
    console.log(`connection is setup at ${port}`)
})
