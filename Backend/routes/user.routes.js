const express = require('express');
const router = express.Router();
const {body} = require("express-validator")
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be atleast 3 character long'),
    body('password').isLength({min:6}).withMessage('password must be atleast 6 character long'),    
],
userController.registerUser
)


router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Invalid Email'),
        body('password').isLength({min:6}).withMessage('invalid password'),    
    ],
    userController.loginUser
)

// Documentation for GET /user/profile
// @route   GET /user/profile
// @desc    Retrieve profile details of the authenticated user
// @access  Private
router.get('/profile',authMiddleware.authUser,userController.getProfile)

// Documentation for GET /user/logout
// @route   GET /user/logout
// @desc    Log out the authenticated user
// @access  Private
router.get('/logout',authMiddleware.authUser,userController.logoutUser)

module.exports = router;