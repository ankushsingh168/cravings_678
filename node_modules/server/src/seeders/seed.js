import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/dbConnection.config.js";
import adminSeed from "./admin.Seed.js";
import userSeed from "./userSeed.js";

const Seed = async () => {
  try {
    await connectDB();

    await adminSeed();
    await userSeed();
    //Call The Function which we need to Seed.
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  } finally {
    process.exit(0);
  }
};

Seed();