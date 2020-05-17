const { Project } = require("./models/project");
const mongoose = require("mongoose");

const data = [
    {
        title: "Restaurant Waitlist API",
        description: "This application allows the user to reserve a table at the Hot Table restaurant. If there are more than 5 reservations, the user will be placed on a waitlist",
        technologies: ["Node.js",
            "Express.js",
            "JavaScript",
            "jQuery",
            "AJAX",
            "Bootstrap"],
        deployedUrl: "https://radiant-cove-79593.herokuapp.com",
        gitHubUrl: "https://github.com/afw821/Restaurant_Waitinglist_API",
        imgUrl: "http://www.afwatkins.com/assets/nodejs-new-pantone-black.png",
    },
    {
        title: "Stock trading API",
        description: "I created a stock search application using the iexTrading API. Users can input a valid stock symbol in the add stock symbol input field and it will add it to the list of already displayed stock buttons. ",
        technologies: ["JavaScript",
            "jQuery",
            "AJAX",
            "Bootstrap",
            "External API(s)"],
        deployedUrl: "https://afw821.github.io/IEX--Trading-Stock-API/",
        gitHubUrl: "https://github.com/afw821/IEX--Trading-Stock-API",
        imgUrl: "http://www.afwatkins.com/assets/stockSearch.PNG",
    },
    {
        title: "Stock trading API",
        description: "I created a stock search application using the iexTrading API. Users can input a valid stock symbol in the add stock symbol input field and it will add it to the list of already displayed stock buttons. ",
        technologies: ["JavaScript",
            "jQuery",
            "AJAX",
            "Bootstrap",
            "External API(s)"],
        deployedUrl: "https://afw821.github.io/IEX--Trading-Stock-API/",
        gitHubUrl: "https://github.com/afw821/IEX--Trading-Stock-API",
        imgUrl: "http://www.afwatkins.com/assets/stockSearch.PNG",
    },
];

async function seed() {
    await mongoose.connect("mongodb://localhost/react_portfolio", { useNewUrlParser: true });

    await Project.deleteMany({});

    await Project.insertMany(data);

    mongoose.disconnect();

    console.info("Done!");
}

seed();