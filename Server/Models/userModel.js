import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    bloodGroup: { type: String, required: true },
    number: { type: String, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    street: { type: String },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pin: { type: String, required: true },
    isDonor: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("user", userSchema);

export { User };
