const mongoose = require("mongoose");
const passport = require("passport");
//const settings = require("../../config/settings");
require("../../middleware/passport")(passport);
//const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../../models/user");

router.post("/register", function(req, res){
    if(!req.body.username || !req.body.password){
        res.json({
            success: false,
            msg: "Please pass username and password"
        })
    } else {
        let newUser = new User({
            username: req.body.username,
            password: req.body.password
        })

        newUser.save(function(err){
            if(err){
                return res.json({
                    success: false, 
                    msg: "Username already exists"
                })
            }
            res.json({success: true, msg: "Successful created new user"});
        })
    }
})

module.exports = router;