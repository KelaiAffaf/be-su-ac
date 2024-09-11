import express from "express";
import { createUser } from "../Controllers/Person.controller.js";

const router = express.Router();

router.post("/create-user", createUser);

export default router;
