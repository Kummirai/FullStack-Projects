import express, { urlencoded } from "express";
import { connectToDatabase, client, getAllMovies } from "./models/db.js";
import { movieRoute } from "./routes/movieRoutes.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:5173",
};
const app = express();
const port = process.env.PORT || 8080;

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/movies", movieRoute);

try {
  await connectToDatabase();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
} catch (error) {
  console.log(`Error: ${error}`);
}
