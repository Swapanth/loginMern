const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

const developerSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a Mongoose model for the "developer" collection
const Developer = mongoose.model("developer", developerSchema);

async function startServer() {
  try {
    await mongoose.connect("mongodb://localhost:27017/swapanthbd", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB");

    // Query all documents from the "developer" collection
    const developersdata = await mongoose.connection.db.collection("developer").find({}).toArray();
    console.log("Number of documents:", developersdata.length);
    console.log("All developers:", developersdata);

    app.listen(3050, () => {
      console.log("Server is running on http://localhost:3040");
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}



startServer();
