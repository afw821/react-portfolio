const projects = require("../routes/projects");
const nodeMailer = require("../routes/nodeMailer");
const messages = require("../routes/messages");

module.exports = function (app) {
  app.use("/api/projects", projects);
  app.use("/api/nodeMailer", nodeMailer);
  app.use("/api/messages", messages);
};
