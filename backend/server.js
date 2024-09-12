import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import taskRoutes from "./routes/task.route.js";

dotenv.config();
const app = express();
const SERVER_PORT = process.env.PORT ?? 5000;

app.use(express.json());
app.use("/api/tasks", taskRoutes);

app.get("/", (_, res) => {
  res.status(200).json({ ok: true });
});

app.listen(SERVER_PORT, () => {
  connectDatabase();
  console.log("⚡ Server started on PORT:", SERVER_PORT);
});
