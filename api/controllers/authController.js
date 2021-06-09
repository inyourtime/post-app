const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.handlerRegister = async (req, res) => {
    try {
        // console.log(req.body);
        const { email, username, password } = req.body;

        // simple validate req body
        // if (!email || !username || !password) {
        //     return res
        //         .status(400)
        //         .json({ status: "error", error: "require information" });
        // }

        // check user exist
        const emailExist = await User.findOne({ email: email });
        if (emailExist) {
            return res
                .status(400)
                .json({ status: "error", error: "Email is already exist" });
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // create new user
        const user = new User({
            email: email,
            username: username,
            password: hashPassword,
        });

        const savedUser = await user.save();
        res.json({ status: "success", message: "Create user successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

exports.handlerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // simple validate req body
        // if (!email || !password) {
        //     return res
        //         .status(400)
        //         .json({ status: "error", error: "require information" });
        // }

        // check user exist
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({
                status: "error",
                error: "Email or Password is incorrect",
            });
        }

        // check incoming password
        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                status: "error",
                error: "Email or Password is incorrect",
            });
        }

        // create token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
            expiresIn: "24h",
        });

        res.cookie("token", token, { httpOnly: true }).json({
            status: "success",
            auth: true,
            message: "Login successfully",
            // token,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

exports.isVerify = async (req, res) => {
    try {
        res.json({ status: "success", auth: true });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};

exports.handlerLogout = (req, res) => {
    try {
        // cookies.set("token", { expires: Date.now() });
        res.clearCookie("token").json({
            status: "success",
            message: "Logout successfully",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
};
