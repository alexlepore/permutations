const express = require("express");
const app = express();
const { connection } = require("./config/db");
const routes = require("./routes")
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

connection();

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`App listening on Port:${PORT}`)
});