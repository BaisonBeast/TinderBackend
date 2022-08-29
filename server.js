import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

const app = express();
const port = process.env.PORT || 8001;
const connection = 'mongodb+srv://admin:f1bQ2h1TzlZ0M3Uw@cluster0.sjx7n.mongodb.net/tinderdb?retryWrites=true&w=majority'

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(Cors());

app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, card) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(card);
        }
    });
});

app.get('/tinder/cards', (req, res)=> {
    Cards.find((err, card) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(card);
        }
    });
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




//f1bQ2h1TzlZ0M3Uw