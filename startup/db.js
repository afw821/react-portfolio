const mongoose = require('mongoose');
module.exports = async function () {

    if (process.env.MONGODB_URI)
        mongoose.connect(process.env.MONGODB_URI);
    else {
        const connection = await mongoose.connect("mongodb://localhost/react_portfolio", { useNewUrlParser: true });

        if (connection)
            console.log('Connected to MongoDB://react-portfolio');
        else
            console.log('Error connecting to MongoDB');

    }

}