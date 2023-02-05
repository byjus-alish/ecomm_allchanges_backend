const express = require('express')
const router  = express.Router();

const {loginUser, loginThroughOAuth} = require('../controllers/login')

router.route('/').post(loginUser);
router.route('/loginThroughOAuth').post(loginThroughOAuth)
module.exports = router;