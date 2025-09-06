import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.URI);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Database connections successfully established!`);
  } catch (error) {
    console.log(`Error: ${error}`);
  } finally {
    await client.close();
  }
};

export { connectToDatabase };
