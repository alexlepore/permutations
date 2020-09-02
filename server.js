const express = require("express");
const app = express();
const { connection } = require("./config/db");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const routes = require("./routes/api/users");
const passport = require("passport");
const PORT = process.env.PORT || 7000;


dotenv.config({path : "./config/.env"});
connection();


app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(routes)


app.listen(PORT, () => {
    console.log(`App listening on Port:${PORT}`)
});