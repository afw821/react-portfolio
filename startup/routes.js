const projects = require("../routes/projects");
const nodeMailer = require("../routes/nodeMailer");
const messages = require("../routes/messages");
const users = require("../routes/users");
const auth = require("../routes/auth");

module.exports = function (app) {
  app.use("/api/projects", projects);
  app.use("/api/nodeMailer", nodeMailer);
  app.use("/api/messages", messages);
  app.use("/api/users", users);
  app.use("/api/auth", auth);
};
