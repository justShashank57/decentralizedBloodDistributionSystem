import express, { urlencoded } from "express";
import { userRoutes } from "../Routes/userRoute.js";
import cors from "cors";

export default async (app) => {
  app.use(cors());
  app.use(express.json());
  app.use(urlencoded({ extended: true }));
  app.use("/user", userRoutes);
  return app;
};
