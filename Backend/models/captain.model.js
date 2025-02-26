const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3, 'First name must be at least 3 characters long']
        },
        lastname:{
            type:String,
            required:true,
            minlength:[3, 'Last name must be at least 3 characters long']
    },
},


   email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
   },
    password:{
     type:String,
     select:false,
     required:true,
     minlength:[6, 'Password must be at least 6 characters long']
    },
    socketId:{
        type:String,    
    },
    stutus:{
        type:String,
        enum:['active', 'inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3, 'Color must be at least 3 characters long']
        },
        plate : {
            type:String,
            required:true,
            minlength:[3, 'Plate must be at least 3 characters long']
        },
        capacity:{
            type:Number,
            required:true,
            min:[1, 'Capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            enum:['car', 'motorcycle','riskshaw'],
            required:true
        }
    },
    location:{
        lat:{
            type:Number,
        },
        long:{
            type:Number,
        }
    },
});

captainSchema.methods.generateAuthToken = function (){

    const token = jwt.sign({_id:this._id},process.env.JWT_SECRET, {expiresIn:'24h'});
    return token;
}

captainSchema.methods.comparePassword = async function (password){
    return await bycrypt.compare(password, this.password)
}

captainSchema.statics.hashedPassword = async function (password){
    return await bycrypt.hash(password, 10);
}
const captainModel = mongoose.model('Captain', captainSchema);
module.exports = captainModel;