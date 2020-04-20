const mongoose = require('mongoose');

const Project = mongoose.model('Projects', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 500
    },
    technologies: {
        type: [String],
        required: true,
    },
    deployedUrl: {
        type: String,
        required: false,
    },
    gitHubUrl: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: false
    }
}));

module.exports.Project = Project;