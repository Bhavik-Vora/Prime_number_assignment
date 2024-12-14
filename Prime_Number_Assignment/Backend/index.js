import express from "express";
import { ConnectDb } from "./components/schema.js";
import userRouter from "./routes/route.js";
const app = express();

const port = 8080;

app.use(express.json());
app.use("/api/v1/user", userRouter);

app.listen(port, () => {
  console.log(`Port is listening to ${port}`);
});

ConnectDb();
