const User = require("../models/user");

exports.getUsername = async (req, res) => {
    try {
        // console.log(req.user)
        const user = await User.findById(req.user);
        res.json({ auth: true, username: user.username });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};
