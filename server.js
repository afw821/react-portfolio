const express = require("express");
const app = express();
const path = require("path");
//middleware
//app.use(express.static(path.join(__dirname, "client")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));
