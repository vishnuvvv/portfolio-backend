import Skill from "../models/skillModel.js";

export const addSkill = async (req, res) => {
  const newSkill = new Skill(req.body);
  try {
    const savedSkill = await newSkill.save();
    return res.status(201).json(savedSkill);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllSkill = async (req, res) => {
  try {
    const skills = await Skill.find();
    return res.status(200).json(skills);
  } catch (error) {
    return res.status(500).json(error);
  }
};
