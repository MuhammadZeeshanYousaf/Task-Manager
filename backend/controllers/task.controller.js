import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
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
};

export const showTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.find({ _id: id });
    res.status(200).json({ ok: true, data: task });
  } catch (e) {
    res.status(404).json({ ok: true, message: e.message });
  }
};
