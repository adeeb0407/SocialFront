import mongoose from 'mongoose';
import UserModel from '../model/userModel.js'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secret = process.env.SECRET || 'bipolarwell101';

export const loginUser = async (req, res) => {

  const { email, password } = req.body;

  try {
    const oldUser = await UserModel.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const passwordVerify = await bcrypt.compare(password, oldUser.password);

    if (!passwordVerify) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id, firstName : oldUser.firstName, lastName : oldUser.lastName, address : oldUser.address, phone: oldUser.phone }, secret, { expiresIn: "1h" });

    const response = { email: oldUser.email, firstName : oldUser.firstName, lastName : oldUser.lastName, address : oldUser.address, phone: oldUser.phone };
    res.status(200).json({ response, token});
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const createUser = async (req, res) => {
  const { firstName, lastName, email, phone, address, password, } = req.body;

  console.log(req.body)

  try {
    const oldUser = await UserModel.findOne({ email, password });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const encodedPassword = await bcrypt.hash(password, 12);

    const result = await UserModel.create({ email, password: encodedPassword, firstName, lastName, phone, address});

    const response = {email, firstName, lastName, phone, address}
    

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ response, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};
export const getUser = async (req, res) => {
  try {
      const fetchData = await UserModel.find() //.limit(how many data you want)
      // const print = fetchData.map((dataItem) => dataItem._id);
      // const print = fetchData.filter((dataItem) => dataItem.title === 'Adseeb');
      res.status(200).json(fetchData)
  } catch (error) {
      res.status(404).json( {message : error.message} )
  }
}