const express = require('express');
const router = new express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;

// db variables
const CONNECTTION_URL = 'mongodb+srv://@cluster0-xkrt7.mongodb.net/test?retryWrites=true&w=majority';
const DATABASE_NAME = "todolist";
var database, collection;

//connect to database
MongoClient.connect(CONNECTTION_URL, { useNewUrlParser: true },(err, client) => {
    if(err) {
        throw err;
    }
    database = client.db(DATABASE_NAME);
    collection = database.collection("todos");
    console.log('connected to mongodb successfully')
})



//APIs
// get all todos
router.get('/items',(req,res) => {
    collection.find({}).toArray((err, result) => {
        if(err) {
            return res.status(500).send(err);
        }
        res.status(200).send({todos: result});
    })
})

// get specific todo
router.get('/item/:id',(req,res) => {
    collection.find({_id: new ObjectId(req.params.id)}).toArray()
        .then((obj) => {
            if(!obj.length){
                res.status(400).send("This data is not exist")
            }
            res.status(200).send({todo: obj})
        },(err) => {
            res.status(400).send(err)
        })
})

// create new todo
router.post('/create',(req,res) => {
    if(req.body.item && req.body.author){
        collection.insertOne({ item: req.body.item ,author: req.body.author})
            .then((obj) => {
                res.status(201).send({todo: obj})
            },(err) => {
                res.status(400).send('create todo failed')
            })
    }else{
        res.status(400).send('incompleted input')
    }
})

//delete specific todo
router.delete('/delete/:id',(req,res) => {
    collection.findOneAndDelete({_id : new ObjectId(req.params.id)})
        .then((result) => {
            res.status(200).send("delete success")
        })
})

module.exports = router
