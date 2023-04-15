var http = require('http');
var express = require('express');
var app = express();
var  MongoClient = require('mongodb').MongoClient;



var mongo = new MongoClient('mongodb+srv://mdeepak1824:aW5478901@govtjobnotification.3ijikyy.mongodb.net/');
const database = mongo.db("Notification");
const collection = database.collection("Auth");

app.get('/',(req,res)=>{
  res.send("This is The initial Run");
});



app.get('/verify',async (req,res)=>{
  var number = req.query.number;
  var data = await collection.findOne({number: number});
  if(data == null){
    res.send(JSON.stringify("First User"));
  }
  else{
    res.send(data);
  }
});


app.get('/register',async (req,res)=>{

  try{

  var number = req.query.number;
  collection.updateOne({number:number},{$set:JSON.parse(req.query.data)});
  res.send("This is Updated");
  }
  catch(err){
    res.send("It is not working")
  }

});


app.get('/show',async (req,res)=>{
    var data = await collection.find({ number: {$ne: ""}}).toArray();
    res.send(data);
});




app.listen(8080);
