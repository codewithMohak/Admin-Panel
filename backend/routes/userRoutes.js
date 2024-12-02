import express from "express";
import {User} from "../models/User.js";

const router = express.Router();

//GET ALL USER
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//ADD NEW USER
router.post("/", async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const newUser = new User({ name, email, role });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//UPDATE USER DETAILS
router.put("/:id", async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, role },
      { new: true }
    );
    res.json(updateUser);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

//DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

export default router;
