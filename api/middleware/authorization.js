const jwt = require("jsonwebtoken");

require("dotenv").config();

module.exports = async (req, res, next) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.status(403).json("Not Authorize");
        }

        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;

        // res.json({ token });
    } catch (err) {
        console.error(err);
        res.status(403).json("Not Authorize");
    }

    next();
};
