const express=require('express')
const router=express.Router();

const CustomerDetails=require('../model/customerdetails');
const asyncWrapper = require('../middleware/async')
const {getAllStatus,
    createPayment,}=require('../controllers/customerdetails');

router.route('/').get(getAllStatus).post(createPayment)

module.exports=router;