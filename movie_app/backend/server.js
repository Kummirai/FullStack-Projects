import express from "express";
import { connectToDatabase } from "./models/db.js";

const app = express();
const port = process.env.PORT || 3000;

try {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} catch (error) {
  console.log(`Error: ${error}`);
}
