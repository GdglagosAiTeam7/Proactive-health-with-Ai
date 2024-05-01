const express = require('express')
const routes = require('./router')
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./dbconnect')
const cookieParser = require('cookie-parser')
require('dotenv').config();

const app = express()

app.use(cors({
  origin: 'https://proactive-health-ai-ui4g.onrender.com'
}));

app.use(cors());

connectDB

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use('/api', routes)

app.get('/', (req, res) => {
    
    res.send('Hi there');
  });

app.listen(PORT, (req, res) => {
    console.log(`App running on port ${PORT}`)

    
})