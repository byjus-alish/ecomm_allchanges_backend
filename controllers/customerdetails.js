const asyncWrapper = require('../middleware/async')
const CustomerDetails=require('../model/customerdetails');

const getAllStatus = asyncWrapper(async(req,res) =>{
    const customerdetails = await CustomerDetails.find({});
    res.status(200).json({ customerdetails });
});


const createPayment = asyncWrapper(async(req,res) =>{
    const customerdetails = await CustomerDetails.create(req.body);
    res.status(202).json({customerdetails});
})


module.exports = {
    getAllStatus,
    createPayment,
}