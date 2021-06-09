const mongoose = require("mongoose");

require("dotenv").config();

const URI = process.env.DB_CONNECTION_STRING;

const connectDB = async () => {
    try {
        await mongoose.connect(URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });

        console.log("database connected");
    } catch (err) {
        console.error(err);
    }
};

module.exports = connectDB;
