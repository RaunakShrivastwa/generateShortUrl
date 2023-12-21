import mongoose from "mongoose";

// Connect with Mongodb
mongoose.connect('mongodb://127.0.0.1:27017/Sorter');
const db = mongoose.connection

// if During Connection any Error Then Trigger this
db.on('error',()=>console.log("There is error with DB"));

//  if All Done 
db.once('open',()=>console.log("Db Connected"));

export default db;