const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB(){
try {
    const mongoDB = await mongoose.connect(`mongodb+srv://ctochi46:proactivehealth5050$@cluster0.h8kqprn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`, 
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
console.log(`Database connected on: ${mongoDB.connection.host}`)
} catch (error) {
    console.error(`Error: ${error}`)
    process.exit(1)  
}
}


module.exports.connectDB = connectDB()