const mongoose = require("mongoose");

const User = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        username: { type: String, required: true },
        password: { type: String, required: true },
        // date: { type: Date, default: Date.now },
    },
    { collection: "users", versionKey: false }
);

module.exports = mongoose.model("User", User);
