const { connection } = require("./db");
connection();

const User = require("../models/User");

const testUser = new User({
    username: "Test",
    password: "Test"
})

testUser.save().then(() => console.log("Database seeded"))