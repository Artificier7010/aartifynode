import bcrypt from "bcryptjs";

import { Users } from "../models/config.js";

export const getAllUsers = async (req, res) => {
    const allUsers = await Users.find();
    return res.status(200).json({ success: true, message: allUsers });
}

export const deleteAllUsers = async (req, res) => {
    const deleteAll = await Users.deleteMany();
    return res.status(200).json({ success: true, message: deleteAll });
}

export const getSingleUsers = async (req, res) => {

    const findUser = await Users.findOne({ email });
    return res.status(201).json({ success: true, message: findUser });
}

export const createUsers = async (req, res) => {

    const { name, email, phone, password } = req.body;
    const data = { name, email, phone, password };

    const newUser = new Users(data);

    // await newUser.generateToken();

    await newUser.save();


    res.status(200).json({ success: true, user: newUser });
}

export const loginUsers = async (req, res) => {

    const { email, password } = req.body;

    const user = await Users.findOne({ email });

    const verifyPassword = await bcrypt.compare(password.toString(), user.password);

    if (verifyPassword === false) {        
        throw new Error("Invalid User Credentials");
    }
    
    const token = await user.generateToken();

    res.cookie("jwt", token, {
        domain: 'http://127.0.0.1:5500/login.html'
    });

    console.log(req.cookies.jwt);

    return res.status(200).json({ success: true, token: token, user: user, cookie: req.cookies.jwt });
}