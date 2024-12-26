const express = require('express');
const captainController = require('../controllers/captain.controller');
const router = express.Router();
const { body } = require('express-validator');
const authmiddleware = require('../middlewares/auth.middleware');

router.post('/register', [
    body('fullname.firstname').isLength({min:3}).withMessage("First name must be atleast 3 characters long"),
    body('fullname.lastname').isLength({min:3}).withMessage("Last name must be atleast 3 characters long"),
    body('email').isEmail().withMessage("Email is invalid"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 characters long"),
    body('vehicle.colour').isLength({min:3}).withMessage("Colour must be atleast 3 characters long"),
    body('vehicle.plateNumber').isLength({min:3}).withMessage("Plate number must be atleast 3 characters long"),
    body('vehicle.capacity').isInt({min:1}).withMessage("Capacity must be atleast 1"),
    body('vehicle.vehicleType').isIn(["car","motorcycle","auto"]).withMessage("Invalid vehicle type"),
],
captainController.registerCaptain
);

router.post('/login',[
    body('email').isEmail().withMessage("Email is invalid"),
    body('password').isLength({min:6}).withMessage("Password must be atleast 6 characters long"),
], 
captainController.loginCaptain
);

router.get('/profile', authmiddleware.authCaptain , captainController.getCaptainProfile);
router.get('/logout', authmiddleware.authCaptain , captainController.logoutCaptain);

module.exports = router;
