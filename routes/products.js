const express = require('express')
const router  = express.Router();
const ROLES_LIST = require('../config/roles_list')
const verifyRoles = require('../middleware/verifyRoles')
const verifyJWT = require('../middleware/verifyJWT')

const {
    getAllProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct, 
} = require('../controllers/products')


//router.route('/').get(getAllProducts).post(verifyJWT,verifyRoles(ROLES_LIST.Admin),createProduct)
router.route('/').get(verifyJWT,getAllProducts).post(createProduct)
router.route('/:id').get(getProduct).patch(verifyRoles(ROLES_LIST.Admin),updateProduct).delete(verifyRoles(ROLES_LIST.Admin),deleteProduct);

module.exports = router;


