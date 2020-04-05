const express = require("express");
const app = express();
const path = require("path");
//middleware
//app.use(express.static(path.join(__dirname, "client")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//startup
require("./startup/routes")(app);
require("./startup/db")();

//server
const PORT = process.env.PORT || 3900;
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
