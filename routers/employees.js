import express from "express";

// Importing Try Catch from middleware
import tryCatch from "../middleware/tryCatch.js";

// Importing Users Controllers
import { getAllEmployees, createEmployees, deleteAllEmployees } from "../controllers/employees.js";

const route = express.Router();

route.get("/", tryCatch(getAllEmployees));

route.get("/delete", tryCatch(deleteAllEmployees));

route.post("/create", tryCatch(createEmployees));

export default route;