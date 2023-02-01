const Product      = require('../model/product');
const asyncWrapper = require('../middleware/async')

const getAllProducts = asyncWrapper(async(req,res) =>{
    const product = await Product.find({});
    res.status(200).json( product );
});

const createProduct = asyncWrapper(async(req,res) =>{
    const product = await Product.create(req.body);
    console.log(req.cookies);
    res.status(201).json({product});
})

const getProduct = asyncWrapper(async(req,res)=>{
    const {id: productID} = req.params
    const product = await Product.findOne({ _id : productID })
    if(!product){
        res.send(`No product with id: ${id}`);
    }
    res.status(200).json({product});
})

const updateProduct = asyncWrapper(async(req,res,next)=>{
    const {id: productID} = req.params
    const product = await Product.findOneAndUpdate({ _id: productID}, req.body, {
        new: true, 
        runValidators: true,
    })
    if(!product){
        res.send(`No product with id: ${id}`);
    }
    res.status(200).json({product});
})

const deleteProduct =  asyncWrapper(async(req,res,next)=>{
    const {id: productID} = req.params
    const product = await Product.findOneAndDelete({ _id: productID});
    if(!product){
        res.send(`No product with id: ${id}`);
    }
    res.status(200).json({product});
})

const getProductByName = asyncWrapper(async(req,res)=>{
    const pid=req.query.pid;
    const product = await Product.find({id:pid});
    res.status(200).json({ product });
})


module.exports = {
    getAllProducts, 
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    getProductByName,
}