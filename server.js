import config from "config";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

// Importing Users Router
import usersRoute from "./routers/users.js";
// Importing Employee Router
import employeeRoute from "./routers/employees.js";

// Importing Error Handler middleware
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(cors());

app.use(bodyParser.json({
    extended: true
}));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());


// Users Route
app.use("/api/users", usersRoute);

// Employee Route
app.use("/api/employee", employeeRoute);

// Error Handler
app.use(errorHandler);

app.listen(config.get("App.port"), () => {
    console.log(`App is running at http://${config.get("App.host")}:${config.get("App.port")}`);
});