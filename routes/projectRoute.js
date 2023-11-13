import express, { Router } from "express";
import { addProject, getAllProjects } from "../controllers/ProjectControllers.js";

const projectRouter = express.Router();

projectRouter.post("/add-project", addProject);
projectRouter.get("/get-projects", getAllProjects);

export default projectRouter;
