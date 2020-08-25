const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://WRKFr0gs95:WRKFr0gs95@cluster0.vzi3n.mongodb.net/workout?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});