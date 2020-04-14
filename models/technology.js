const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: [
      "Node.js",
      "React.js",
      "Express.js",
      "JavaScript",
      "C#",
      "ASP.NET",
      "MongoDB",
      "SQL",
      "BCrypt",
      "Authentication",
      "Authorization",
      "JSON Web Token",
      "jQuery",
      "AJAX",
      "Bootstrap",
      "External API(s)",
    ],
  },
});

const Technology = mongoose.model("Technology", technologySchema);

module.exports = Technology;
