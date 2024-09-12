import mongoose from "mongoose";
import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
  const taskBody = req.body;

  if (!taskBody.title) {
    return res
      .status(400)
      .json({ ok: false, message: "Task title is required." });
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
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ ok: false, message: "Invalid task id!" });

  try {
    const task = await Task.find({ _id: id });
    res.status(200).json({ ok: true, data: task });
  } catch (e) {
    res.status(404).json({ ok: false, message: e.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ ok: false, message: "Invalid task id!" });

  try {
    const task = await Task.findByIdAndDelete({ _id: id });
    if (task) res.status(200).json({ ok: true, data: task });
    else res.status(200).json({ ok: false, message: "Task not found!" });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
};

export const allTasks = async (_, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({ ok: true, data: task });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(400).json({ ok: false, message: "Invalid task id!" });

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      {
        title: task.title,
        description: task.description,
      },
      { new: true }
    );
    res.status(200).json({ ok: true, data: updatedTask });
  } catch (e) {
    res.status(500).json({ ok: false, message: e.message });
  }
};
