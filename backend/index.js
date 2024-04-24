import express from "express";
import mongoDB from "./db.js";
import routes from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5000;
mongoDB();

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());
app.use("/v1", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
