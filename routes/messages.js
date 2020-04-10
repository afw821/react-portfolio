const ash = require("express-async-handler");
const express = require("express");
const router = express.Router();
const sendMessage = require("../routes/nodeMailer");

router.get('/:name/:email/:message', ash(async (req, res) => {
    console.log('req email', req.params.email);
    console.log('req params name', req.params.name);
    console.log('req params message', req.params.message);

    const { name, email, message } = req.params;
    const result = await sendMessage(email, message, name);
    console.log('post guy result', result);
    //if (!result) res.status(400).send({ sent: false, message: "Error Sending Message" });

    res.header('Access-Control-Allow-Origin', '*').send({ sent: true, message: "Message sent successfully" });
}));
module.exports = router;