import express from 'express';
import {connectToDatabase} from "./models/db.js";
import route from "./routes/indexRoute.js";
import indexRoute from "./routes/indexRoute.js";
import cors from "cors";


const corsOptions = {
    origin: "http://localhost:5173",
}

const app = express();

app.use(cors(corsOptions))

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);

await connectToDatabase();
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})