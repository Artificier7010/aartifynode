import { Employees } from "../models/config.js";

export const getAllEmployees = async (req, res) => {
  const allEmployees = await Employees.find();
  return res.status(200).json({ success: true, message: allEmployees });
};

export const deleteAllEmployees = async (req, res) => {
  const deleteAll = await Employees.deleteMany();
  return res.status(200).json({ success: true, message: deleteAll });
};

export const createEmployees = async (req, res) => {
  const { profileImg, name, email, description } = req.body;
  const data = { profileImg, name, email, description };

  const newEmployee = new Employees(data);

  await newEmployee.save();
  res.status(200).json({ success: true, employee: newEmployee });
  // res.status(200).json({ success: true, employee: req.body.name });
};
