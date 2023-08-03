import express from "express";

// Importing Try Catch from middleware
import tryCatch from "../middleware/tryCatch.js";

// Importing Users Controllers
import { getAllUsers, getSingleUsers, createUsers, loginUsers, deleteAllUsers } from "../controllers/users.js";

const route = express.Router();

route.get("/", tryCatch(getAllUsers));

route.get("/delete", tryCatch(deleteAllUsers));

route.get("/single", tryCatch(getSingleUsers));

route.post("/create", tryCatch(createUsers));

route.post("/login", tryCatch(loginUsers));

export default route;