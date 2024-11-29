const express = require('express');
const { googleLogin } = require('../controllers/authController');

const router = express.Router();

router.get('/test',(req,res)=>{
    res.send("test pass")
})

router.get('/google',googleLogin);

module.exports = router;