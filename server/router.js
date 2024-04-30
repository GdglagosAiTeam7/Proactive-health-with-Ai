const express = require('express')
const {
    getData,
    signupUser,
    loginUser,
    logoutUser
} = require('./controller')
const router = express.Router()

router.post('/signup', signupUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.post('/upload-image', getData)
router.get('/upload-image', getData)

module.exports = router