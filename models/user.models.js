import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      rquired: true,
      unique: true,
      lowercase: true,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
