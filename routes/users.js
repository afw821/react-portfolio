const { User, validate } = require('../models/user');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const ash = require('express-async-handler');
const auth = require("../middleware/auth");

router.post('/', ash(async (req, res) => {
    const { name, email, password } = req.body;
    const { error } = validate(req.body);
    if (error) return res.status(404).send(error.details[0].message);
    let user = await User.findOne({ email });
    if (user) return res.status(400).send('User already registered.');

    user = new User({
        name: name,
        email: email,
        password: password,
        isAdmin: true
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    res.send(user);
}));

router.get('/', auth, ash(async function (req, res) {
    const users = await User.find();
    res.send(users);
}));

module.exports = router;