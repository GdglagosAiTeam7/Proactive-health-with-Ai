const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const fs = require("fs");
const SignUpFlow = require('./schema')
const {generateToken} = require('./token')
const mongoose = require('mongoose')

async function getData (req, res){
try {
    const {question, path, mimeType} = req.body

    const genAI = new GoogleGenerativeAI(`AIzaSyDoVgqXh1hhSGhuqCh2Sg1A2CV4k6LVjIQ`);

    function fileToGenerativePart(path, mimeType) {
        return {
          inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
          },
        };
      }

    const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

    const prompt = question
  
    

    const imageParts = [
        fileToGenerativePart(path, mimeType),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const responseText = response.text();
    res.send(responseText)
    console.log(responseText);
    
    
} catch (error) {
    console.log(`Unable to provide response from the AI: ${error}`)
    throw new Error(error)
    
}
}


async function signupUser(req, res){
   
    try {
       const {name, email, password} = req.body
       const user = await SignUpFlow.findOne({email})

       console.log(user)

       if(user){
        res.status(400)
        throw new Error('User already exists')
       }

       const newUser = await SignUpFlow.create({
        name,
        email,
        password
       })

       console.log(newUser)
      

       if(newUser){
        generateToken(res, newUser._id);

        res.status(200).json({
          name: newUser.name,
          _id: newUser._id,
          email: newUser.email
        });
       }



    } catch (error) {
      res.status(400);
      console.log(error)
      throw new Error(error);
    }
}


async function loginUser(req, res){
    try {
      const {email, password} = req.body

      const user = await SignUpFlow.findOne({email})

      if(user && (await user.matchedPassword(password))){
        generateToken(res, user._id)
        res.status(200).json({
          name: user.name,
          _id: user._id
        })
      }
    } catch (error) {
      res.status(400);
      console.log(error)
      throw new Error(error);
    }
}

async function logoutUser(req, res){
   res.cookie('jwt', "", {
    httpOnly: true,
    expires: new Date(0)
   })

   res.status(200).json({message: "User token deleted"})
   
}

module.exports.getData = getData
module.exports.signupUser = signupUser
module.exports.loginUser = loginUser
module.exports.logoutUser = logoutUser