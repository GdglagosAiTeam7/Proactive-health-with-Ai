const jwt = require('jsonwebtoken');

const dotenv = require('dotenv')

dotenv.config()

function generateToken(res, id){
 const token = jwt.sign({id}, "foo", {expiresIn: "30d"})

 res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 60 * 60 * 10000
 })
}

module.exports.generateToken = generateToken