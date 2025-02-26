const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array() });
    }
    const { fullname, email, password, color, vehicle } = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({email});
    if(isCaptainAlreadyExist){
        return res.status(400).json({error : 'Captain already exsist'})
    }

    const hashedPasword = await captainModel.hashedPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPasword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });
    const token = captain.generateAuthToken();
    res.status(201).json({token,captain})
}

module.exports.loginCaptain = async (req,res,next ) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error : errors.array()})
    }

    const {email,password} = req.body;
    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(400).json({error : "Invalid email or password"})
    }

    const isMatch =  await captain.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({error : "Invalid password"})
    }
    const token = captain.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token,captain});    
}

module.exports.getProfile = async (req,res,next) =>{
    res.status(200).json({captain : req.captain});
}

module.exports.logoutCaptain = async (req,res,next) =>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokenModel.create({token});
    res.clearCookie('token');
    res.status(200).json({message : 'logout successfully'});
}

