// Importing Required Packages
import config from "config";
import mongoose from "mongoose";

// Importing Schemas
import usersSchema from "./schema/Users.js";

// DB connection String
const uri = `mongodb+srv://${config.get("DB.user")}:${config.get("DB.password")}@${config.get("DB.host")}/${config.get("DB.name")}?retryWrites=true&w=majority`;

try {
    // DB Connection
    await mongoose.connect(uri);
    console.log("connection successful");

} catch (error) {
    console.log(error.message);
}

// Creating Collection for the Schemas
export const Users = mongoose.model("Users", usersSchema, "Users");