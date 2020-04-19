const mongoose = require('mongoose');
module.exports = async function () {

    if (process.env.MONGODB_URI) {
        console.log('iff so mongo url guy');
    }
    mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react_portfolio", { useNewUrlParser: true })
        .then(function (res) {
            console.log('Connected to Mongoose');
        }).catch(error => {
            console.log('err connecting', err);
        });
    // else {
    //     const connection = await mongoose.connect("mongodb://localhost/react_portfolio", { useNewUrlParser: true });

    //     if (connection)
    //         console.log('Connected to MongoDB://react-portfolio');
    //     else
    //         console.log('Error connecting to MongoDB');

    // }

}