const projects = require('../routes/projects');
const nodeMailer = require('../routes/nodeMailer');

module.exports = function (app) {
    app.use('/api/projects', projects);
    //app.use('/api/nodeMailer', nodeMailer);
}