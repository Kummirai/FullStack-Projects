import express from "express";
import cors from "cors";
import { connectToDatabase } from "./models/db.js";
import { homeRoute } from "./routes/indexRoute.js";

const corsOptions = {
  origin: "http://localhost:5173",
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", homeRoute);

try {
  await connectToDatabase();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
}
