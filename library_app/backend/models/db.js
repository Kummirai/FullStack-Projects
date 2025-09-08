import {MongoClient} from 'mongodb';

const client = new MongoClient("mongodb://localhost:27017/");

const connectToDatabase =  async  () => {
    try{
        await client.connect();
        console.log(`Connected to MongoDB!`);
    } catch (err){
        console.log(err);
    }
}


const getBooks = async (client) => {
    return await client.db("library").collection("books").find().limit(20).toArray();
}

const getPopularAuthors = async (client) => {
    return await client.db("library").collection("books").aggregate([
        {
            $group: {
                _id: "$book_author",  // Use _id for grouping field
                count: { $sum: 1 }    // Count books for each author
            }
        },
        {
            $sort: { count: -1 }      // Optional: sort by count descending
        }
    ]).limit(3).toArray();
}

export {client, connectToDatabase, getBooks, getPopularAuthors};

