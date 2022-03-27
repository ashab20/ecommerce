const mongoose = require('mongoose');

const DatabaseConnection = () => {
    mongoose.connect(process.env.MONGODB_LINK,{ useNewUrlParser: true, useUnifiedTopology: true})
    .then((con) => {
        console.log(`Mongodb connected to the server ${con.connection.host}`);
    })
    .catch((err) => {
        console.log(err);
    });
}

module.exports = DatabaseConnection;