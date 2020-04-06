const { Project } = require("../models/project");
const ash = require("express-async-handler");
const express = require("express");
const router = express.Router();

router.get('/', ash(async (req, res) => {
    const projects = await Project.find()
        .sort({ title: 'asc' });

    res.header('Access-Control-Allow-Origin', '*').send(projects);

}));

router.post('/', ash(async (req, res) => {
    const { title, description, technologies, deployedUrl, gitHubUrl, imgUrl } = req.body;

    let project = new Project({
        title: title,
        description: description,
        technologies: technologies,
        deployedUrl: deployedUrl,
        gitHubUrl: gitHubUrl,
        imgUrl: imgUrl
    });

    await project.save();

    res.send({ project });
}));

module.exports = router;
