import mongoose from "mongoose";
import { DB_URL } from "../Config/index.js";

export default async () => {
  try {
    await mongoose
      .connect(DB_URL, { dbName: "BloodHub" })
      .then((result) => {
        console.log("DB Connected.");
      })
      .catch((err) => console.log("ERROR: ", err));
  } catch (err) {
    console.log("ERROR: ", err);
  }
};
