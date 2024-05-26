import mongodb from "mongodb";
import dotenv from 'dotenv';
dotenv.config({ path: './.env' });



export const connectDB = async () => {
    const client = new mongodb.MongoClient(process.env.URI);
    await client.connect();
    console.log("Connected to MongoDB");
    return client;
}

