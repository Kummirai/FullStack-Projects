import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.URI);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Database connection successful!`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const getAllYears = async (client) => {
  return await client.db("sample_mflix").collection("movies").distinct("year");
};

const getAllMovies = async (client) => {
  return await client
    .db("sample_mflix")
    .collection("movies")
    .find({ year: 2008 })
    .limit(40)
    .toArray();
};

const getMovieByYear = async (client, year) => {
  return await client
    .db("sample_mflix")
    .collection("movies")
    .find({ year: year })
    .limit(20)
    .toArray();
};

export { connectToDatabase, client, getAllMovies, getMovieByYear, getAllYears };
