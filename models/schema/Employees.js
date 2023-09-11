import { Schema } from "mongoose";

const employeesSchema = new Schema({
    profileImg: { type: String },
    name: { type: String },
    email: { type: String },
    description: { type: String }
});

export default employeesSchema;