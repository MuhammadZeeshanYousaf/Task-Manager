import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/db.js";
import Task from "./models/task.model.js";

dotenv.config();
const app = express();
app.use(express.json());
const SERVER_PORT = process.env.PORT ?? 5000;

app.get("/", (_, res) => {
  res.status(200).json({ ok: true });
});

app.post("/api/tasks", async (req, res) => {
  const taskBody = req.body;

  if (!taskBody.title) {
    res.status(400).json({ ok: false, message: "Task title is required." });
  }

  const newTask = { title: taskBody.title, description: taskBody.description };

  try {
    const createdTask = new Task(newTask);
    createdTask.save();
    res.status(201).json({ ok: true, data: createdTask });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
});

app.listen(SERVER_PORT, () => {
  connectDatabase();
  console.log("⚡ Server started on PORT:", SERVER_PORT);
});

