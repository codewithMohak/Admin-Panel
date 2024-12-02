import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
});

const User = mongoose.model("User", userSchema);

export { User };
