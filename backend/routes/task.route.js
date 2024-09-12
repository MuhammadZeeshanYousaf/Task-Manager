import express from "express";
import {
  createTask,
  deleteTask,
  allTasks,
  showTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask);
router.get("/:id", showTask);
router.delete("/:id", deleteTask);
router.get("/", allTasks);
router.put("/:id", updateTask);
router.patch("/:id", updateTask);

export default router;
