const mongoose = require('mongoose')


const connectDB = () => {
const uri = "mongodb+srv://seed:ynysweald420@cluster0.wanypjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Database: Connected.");
  } finally {
    
    await mongoose.disconnect();
  }
}
run().catch(console.dir);
}

module.exports = connectDB