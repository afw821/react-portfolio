const ash = require("express-async-handler");
const express = require("express");
const router = express.Router();
const sendMessage = require("../routes/nodeMailer");

router.post('/', ash(async (req, res) => {
    req.header('Access-Control-Allow-Origin', '*');

    const { name, email, message } = req.body;
    console.log('req body', req.body);
    const result = sendMessage(email, message, name);
    console.log('post guy result', result);
    if (!result) res.status(400).send({ sent: false, message: "Error Sending Message" });

    res.send({ sent: true, message: "Message sent successfully" });
}));
module.exports = router;