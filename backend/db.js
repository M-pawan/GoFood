import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://jacksparrw530:4tEYKHIEoF2mcMXv@cluster0.bcoyhfn.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default mongoDB;
