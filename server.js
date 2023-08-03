import config from "config";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

// Importing Users Router
import usersRoute from "./routers/users.js";

// Importing Error Handler middleware
import errorHandler from "./middleware/errorHandler.js";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());


// Users Route
app.use("/api/users", usersRoute);

// Error Handler
app.use(errorHandler);

app.listen(config.get("App.port"), () => {
    console.log(`App is running at http://${config.get("App.host")}:${config.get("App.port")}`);
});