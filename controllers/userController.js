import User from "../models/User.js";

// GET ALL USERS
export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};

// GET USER BY ID
export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
};

// UPDATE USER
export const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    const updated = await user.save();
    res.json(updated);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// DELETE USER
export const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.deleteOne();
    res.json({ message: "User removed" });
  } else {
    res.status(404).json({ message: "User not found" });
  }
};