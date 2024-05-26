import express from 'express';
import { ObjectId } from 'mongodb';
import { connectDB } from './db.js';

export const router = express.Router();
router.use(express.json());


router.get("/", async(req, res) => {

    const client = await connectDB();
    const db = client.db("dashboard");
    const result = await db.collection("users").find({}).toArray();
    res.send(result);
})

router.get("/:id", async(req, res) => {

    const client = await connectDB();
    const db = client.db("dashboard");
    const result = await db.collection("users").findOne({ _id: new ObjectId(req.params.id) });
    res.send(result);
});


router.post("/", async(req, res) => {

    const client = await connectDB();
    const db = client.db("dashboard");
    const result = await db.collection("users").insertOne(req.body);
    res.send(result);
});

router.put("/:id", async(req, res) => {

    const client = await connectDB();
    const db = client.db("dashboard");
    const result = await db.collection("users").updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });
    res.send(result);
});


router.delete("/:id", async(req, res) => {

    const client = await connectDB();
    const db = client.db("dashboard");
    const result = await db.collection("users").deleteOne({ _id: new ObjectId(req.params.id) });
    res.send(result);
});

/* Export the router. */
export default router;