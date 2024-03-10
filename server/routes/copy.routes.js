import express from "express";
import { getCount, incrementCount } from "../controllers/copy.controller.js";

const router = express.Router();

router.get("/get", getCount);
router.post("/increment", incrementCount);

export default router;
