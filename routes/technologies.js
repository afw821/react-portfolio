const Technology = require("../models/technology");
const express = require('express');
const router = express.Router();
const ash = require('express-async-handler');

router.post('/', ash(async (req, res) => {
    const { name } = req.body;

    let technology = new Technology({
        name: name
    });

    await technology.save();

    res.send(technology);
}));

router.get('/', ash(async (req, res) => {
    const technologies = await Technology.find();

    res.send(technologies);
}));

module.exports = router;