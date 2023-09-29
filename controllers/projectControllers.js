import Project from "../models/projectModel.js";

export const addProject = async (req, res) => {
  const newProject = new Project(req.body);
  try {
    const savedProject = await newProject.save();
    return res.status(201).json(savedProject);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error while adding project", error });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({ messge: "Unable to get projects!", error });
  }
};
