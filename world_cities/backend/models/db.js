import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017/");

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Database connected!");
  } catch (error) {
    console.log(error);
  }
};

const fetchCountries = async () => {
  return await client
    .db("world_cities")
    .collection("countryCapitals")
    .find()
    .toArray();
};

export { connectToDatabase, fetchCountries };
