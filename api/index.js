require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const app = express();

// require route
const authRoute = require("./routes/authRoute");
const dashboardRoute = require("./routes/dashboardRoute");

// require database
const connectDB = require("./config/database");
// connecting to database
connectDB();

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(cookieParser());


// auth route
app.use("/auth", authRoute);

// dashboard route
app.use("/dashboard", dashboardRoute);

const Port = process.env.Port;
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
