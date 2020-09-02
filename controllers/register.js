const User = require("../models/User");
const { validtateRegister } = require("../middleware/register");
const bcrypt = require("bcryptjs");

module.exports.registerController = (req, res) => {
    const { errors, isValid } = validtateRegister(req.body);
    
    if(!isValid){
        return res.status(400).json(errors);
    }

    User.findOne({
        email: req.body.email
    }).then(User =>{
        if (user){
            return res.status(400).json({
                email: "Email already exists"
            });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        }
    });
}