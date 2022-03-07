const express=require("express");
const router = express.Router();
const Product=require("../models/productModel");
//Storing newly created data into mongoatlas
router.route("/create").post((req,res)=>{
     const image =req.body.image;
     const quantity= req.body.quantity;
     const  weight= req.body.weight;
     const breed= req.body.breed;
     const source= req.body.source;
     const  location= req.body.location;
     const newProduct=new Product({
         image,
         quantity,
         weight,
         breed,
         source,
         location,
     });
     newProduct.save()
})
//Fetching all product details
router.get('/productdetails', async (req, res) => {
    try {
        Product.find().exec(function (err, result) {
            res.send(result)
        })
    }
    catch (err) {
        res.send({ message: err })
    }
})



module.exports = router;