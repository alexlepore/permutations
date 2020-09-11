const express = require("express");
const app = express();
const { connection } = require("./config/connection");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const auth = require("./routes/auth");

connection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use("/api/auth", auth);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

app.listen(PORT, () => {
    console.log(`App listening on Port:${PORT}`)
});