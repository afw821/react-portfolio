const { Project } = require("../models/project");
const ash = require("express-async-handler");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
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

    res.send({ status: true, project });
}));

router.get('/:id', ash(async (req, res) => {
    const project = await Project.findById(req.params.id);
    console.log('project by id', project);
    if (!project) return status(404).send('Project not found');

    res.json(project);
}));

router.delete('/:id', [auth, admin], ash(async (req, res) => {
    console.log('req.params.id', req.params.id);
    const id = req.params.id;
    const project = await Project.findByIdAndRemove(id);
    console.log('project', project);
    if (!project) return status(404).send('Movie not found.');
    res.send({ status: true });
}));

module.exports = router;
