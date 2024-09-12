import express from "express";
import { createTask, showTask } from "../controllers/task.controller.js";

const router = express.Router();

router.post("/", createTask);
router.get("/:id", showTask);

export default router;
