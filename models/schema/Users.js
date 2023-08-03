import config from "config";
import { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import os from "os";

const userSchema = new Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    password: { type: String },
    tokens: [{
        token: { type: String },
        // os: { type: String, default: os.version() }
    }]
});

userSchema.methods.generateToken = async function () {
    const token = jwt.sign({_id: this._id.toString()}, config.get("SECRET"));
    this.tokens = this.tokens.concat({token:token});
    await this.save();
    return token;
}

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password.toString(), 12);
    }
    next();
});

export default userSchema;