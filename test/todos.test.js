const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
chai.use(chaiHttp);


describe('GET /todos/items', () => {
    // /todos/items -> get all todos
    it('should return a 200 response', (done) => {
        chai.request('localhost:4000/todos')
            .get('/items')
            .end((err, res) => {
                expect(res.body).to.have.property('todos')
                expect(res).to.have.status(200);
                done();
            })
    })

})

describe('GET /todos/item/:id',() => {
    let objectid = new ObjectId();

    // run before all tests in this block
    before(function(done) {
        // db variables
        const CONNECTTION_URL = 'mongodb+srv://oldmo86617:_oo0981833393@cluster0-xkrt7.mongodb.net/test?retryWrites=true&w=majority';
        const DATABASE_NAME = "todolist";
        var database, collection;

        //connect to database
        MongoClient.connect(CONNECTTION_URL, { useNewUrlParser: true },(err, client) => {
            if(err) {
                throw err;
                done();
            }
            database = client.db(DATABASE_NAME);
            collection = database.collection("todos");
            collection.insertOne({_id: objectid, item: "item for testing", author: "Oldmo"})
                .then(() => {
                    done();
                })
        })
      });
    
      // run after all tests in this block
    after(function(done) {
        // db variables
        const CONNECTTION_URL = 'mongodb+srv://oldmo86617:_oo0981833393@cluster0-xkrt7.mongodb.net/test?retryWrites=true&w=majority';
        const DATABASE_NAME = "todolist";
        var database, collection;

        //connect to database
        MongoClient.connect(CONNECTTION_URL, { useNewUrlParser: true },(err, client) => {
            if(err) {
                throw err;
                done();
            }
            database = client.db(DATABASE_NAME);
            collection = database.collection("todos");
            collection.findOneAndDelete({_id : objectid})
                .then(() => {
                    done();
                })
        })
      });

    // success case(valid id)
    it('should return specific todo doc', (done) => {
        chai.request('localhost:4000/todos')
            .get(`/item/${objectid.toHexString()}`)
            .end((err,res) => {
                expect(res).to.have.status(200);
                done();
            })
    })

    // failure case(invalid id)
    it('should return status code 400',(done) => {
        chai.request('localhost:4000/todos')
            .get('/item/5d3be2095d18ae544421286c')
            .end((err,res) => {
                expect(res).to.have.status(400);
                done();
            })
    })
})


describe('POST /todos/create', () => {

    after(function(done) {
        // db variables
        const CONNECTTION_URL = 'mongodb+srv://oldmo86617:_oo0981833393@cluster0-xkrt7.mongodb.net/test?retryWrites=true&w=majority';
        const DATABASE_NAME = "todolist";
        var database, collection;

        //connect to database
        MongoClient.connect(CONNECTTION_URL, { useNewUrlParser: true },(err, client) => {
            if(err) {
                throw err;
                done();
            }
            database = client.db(DATABASE_NAME);
            collection = database.collection("todos");
            collection.findOneAndDelete({_id : new ObjectId("5d3bf8cb9d893a2d481a6a6e")})
                .then(() => {
                    done();
                })
        })
      });
    // create a todo item(success case)
    it('should return 201 status code',(done) => {
        chai.request('localhost:4000/todos')
            .post('/create')
            .send({_id: "5d3bf8cb9d893a2d481a6a6e",item: "learn SQL",author: "Morris"})
            .then((res) => {
                expect(res).to.have.status(201);
                done();
            })
            .catch((err) => {
                throw err;
            })
    })

    // create fail case
    it('should return 400 status code because the inputs are not completed',(done) => {
        chai.request('localhost:4000/todos')
            .post('/create')
            .send({item: "eat ice cream"}) // lack the suthor properity
            .end((err,res) => {
                expect(res).to.have.status(400);
                done();
            })
    })
})

describe('DELETE /todos/delete/:id',() => {
    let objectid = new ObjectId();

    // run before all tests in this block
    before(function(done) {
        // db variables
        const CONNECTTION_URL = 'mongodb+srv://oldmo86617:_oo0981833393@cluster0-xkrt7.mongodb.net/test?retryWrites=true&w=majority';
        const DATABASE_NAME = "todolist";
        var database, collection;

        //connect to database
        MongoClient.connect(CONNECTTION_URL, { useNewUrlParser: true },(err, client) => {
            if(err) {
                throw err;
                done();
            }
            database = client.db(DATABASE_NAME);
            collection = database.collection("todos");
            collection.insertOne({_id: objectid, item: "item for testing", author: "Oldmo"})
                .then(() => {
                    done();
                })
        })
      });
    
     
      it('should delete the item successfully and return 200 status code',(done) => {
        chai.request('localhost:4000/todos')
        .delete(`/delete/${objectid.toHexString()}`)
        .end((err,res) => {
            expect(res).to.have.status(200);
            done();
        })
      })
})