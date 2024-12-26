const captainModel = require('../models/captain.model');


module.exports.createCaptain = async({
    firstname,lastname,email,password,colour,plateNumber,capacity,vehicleType
})=>{
    if(!firstname || !lastname || !email || !password || !colour || !plateNumber || !capacity || !vehicleType){
        throw new Error("All fields are required");
    }
    const captain = await captainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            colour,
            plateNumber,
            capacity,
            vehicleType
        }
    })
    return captain;
}