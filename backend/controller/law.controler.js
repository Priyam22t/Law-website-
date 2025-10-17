import { MongoClient } from 'mongodb';

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
await client.connect();

async function getList() {
  try {
    const db = client.db('lawwebsite');
    const collection = db.collection('laws');
    // Find the first document in the collection
    const first = await collection.findOne();
    console.log(first);
  }
  catch (err) {
    console.log(err);
  }
}

async function updateContact(name,email,phone,message){
  try {
    const db = client.db('lawwebsite');
    const collection = db.collection('contactus');

    await collection.insertOne({
      "name": name,
      "email": email,
      "phone":phone,
      "message":message
    })
    console.log("added to contactus");
    return 1;
  } catch (error) {
    console.log(error);
  }
}

async function addSubscription(email){
  try {
    const db = client.db('lawwebsite');
    console.log(email);
    const collection = db.collection('subscription');

    const isExist = await collection.findOne({"email" : email});

    if(isExist === null){
      await collection.insertOne({"email" : email});
    }
    else{
      return 1;
    }
  } catch (error) {
    console.log(error);
  }
}

async function addUser(name,email,passwd){
  try {
    const db = client.db("lawwebsite");
    const collection = db.collection('users');
    console.log(email);
    const isExist = await collection.findOne({"email" : email});

    if(isExist === null){
      await collection.insertOne(
        {
          "name" : name,
          "email" : email,
          "password" : passwd,
        }
      );
    }
    else{
      return 1;
    }
  } catch (error) {
    console.log(error);
  }
}


async function LoginUser(email,password) {
  try {
    const db = client.db("lawwebsite");
    const collection = db.collection('users');
    
    const isExist = await collection.findOne({"email" : email});

    if(isExist === null){
      return 0;
    }
    else{
      const isValid = await collection.findOne({"email":email});
      console.log(isValid);
      return 1;
    }
  } catch (error) {
      console.log(error);
  }
}

async function execPayment(name,email,phone,acc_no,attorney,amt){
  try {
    const db = client.db("lawwebsite");
    const collection = db.collection("payments");

    const isExist = await collection.findOne({"name":name});

    if(isExist === null){
      await collection.insertOne({
        "name":name,
        "email":email,
        "phone":phone,
        "account":acc_no,
        "Attorney":attorney,
        "amount":amt,
      });
      return 1;
    }
    else{
      return 0;
    }
  } catch (error) {
    console.log(error);
  }
}

export { execPayment, getList,updateContact,addSubscription,addUser,LoginUser };

