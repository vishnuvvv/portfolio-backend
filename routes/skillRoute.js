import express from "express";
import { addSkill, getAllSkill } from "../controllers/skillControllers.js";

const skillRouter = express.Router();

skillRouter.post("/add-skill", addSkill);
skillRouter.get("/get-skills", getAllSkill);

export default skillRouter;
