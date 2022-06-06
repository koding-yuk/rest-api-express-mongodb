import express from "express";
import config from "./config";
import productRouter from "./routes/product.route";
import mongoose from "mongoose";

mongoose.connect(config.databaseURL);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("Mongoose connection error ", error);
});

database.on("connected", () => {
  console.log("Database connected");
});

const app = express();
app.use(express.json());

app.use("/api", productRouter);

app.listen(config.port, () => {
  console.log(`server is running on http://localhost:${config.port}`);
});

export default app;
