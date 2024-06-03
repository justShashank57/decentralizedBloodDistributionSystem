import express from "express";
import expressApp from "./Services/expressApp.js";
import { PORT } from "./Config/index.js";
import connectDb from "./Services/connectDb.js";

const startServer= async()=>{
      const app = express();
      await expressApp(app);
      await connectDb();
      app.listen(PORT,()=>{
         console.log(`Server started on PORT: ${PORT}`);
      });
}

startServer();
