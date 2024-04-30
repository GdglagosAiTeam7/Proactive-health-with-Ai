const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')


const mySchema = new mongoose.Schema({
    name: {
        type: String,
        
    },

    email: {
        type: String,
        required: true, 
        unique: true
    },
    
    password: {
        type: String,
        required: true,
        unique: true
     },

     
  },

  {
    timestamps: true
 }
);
  

mySchema.methods.matchedPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}


mySchema.pre('save', async function (next) {
    try {
      // Only hash the password if it is modified or new
      if (!this.isModified('password')) {
        return next();
      }
  
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
  
      // Hash the password with the generated salt
      const hashedPassword = await bcrypt.hash(this.password, salt);
  
      // Replace the password with the hashed password
      this.password = hashedPassword;
  
      return next();
    } catch (error) {
      return next(error);
    }
  });
 
  const SignUpFlow = mongoose.model('SignUpFlow', mySchema);

  module.exports = SignUpFlow