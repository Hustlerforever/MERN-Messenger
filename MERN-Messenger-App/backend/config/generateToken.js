const jwt = require('jsonwebtoken');
const axios = require('axios');

const generateToken = (id) => {

    
    return jwt.sign({id},process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    // function to renew the JWT

};

module.exports = generateToken;




