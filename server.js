const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
require("dotenv").config();
//middleware
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
//startup
require("./startup/routes")(app);
require("./startup/db")();


// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//server
const PORT = process.env.PORT || 3900;
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
