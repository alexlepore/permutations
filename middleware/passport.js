let JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt;

let User = require("../models/user");
let settings = require("../config/settings")

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = settings.secret;
    passport.use(new JwtStrategy(opts, function(jwt_payload, done){
        User.findOne({id: jwt_payload.id}, function(err, user){
            if(err){
                return done(err, false);
            }
            if(user){
                done(null, user);
            } else{
                done(null, false);
            }
        })
    }))
}
