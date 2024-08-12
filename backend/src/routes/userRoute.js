const express = require('express');
const router = express.Router();
const { default: mongoose } = require('mongoose');
const User = require('../db/schemas/User');
const Experience = require('../db/schemas/Experience');
const Education = require('../db/schemas/Education');
const Project = require('../db/schemas/Project');
const Skill = require('../db/schemas/Skill');

// Create a new user
router.post('/', async (req, res) => {
  try {
    
    const user = await User.findOne({ userName: req.body["userName"] });
    if(user)
    {
        res.status(400).json({ message: "User already exists. username should be unique", userId:user["_id"] });
    }
    else
    {
        let expObjArray = [];
        for(let exp of req.body["experience"])
        {
            let newExp = await Experience.create(exp);
            expObjArray.push(newExp["_id"])
        }
    
        let eduObjArray = [];
        for(let edu of req.body["education"])
        {
            let newEdu = await Education.create(edu);
            eduObjArray.push(newEdu["_id"])
        }
        console.log(eduObjArray)
    
        let projectObjArray = [];
        for(let proj of req.body["project"])
        {
            let newProject = await Project.create(proj);
            projectObjArray.push(newProject["_id"])
        }
        console.log(projectObjArray)
    
        let skillObjArray = [];
        for(let sk of req.body["skill"])
        {
            let newSkill = await Skill.create(sk);
            skillObjArray.push(newSkill["_id"])
        }
        console.log(skillObjArray)
    
        req.body["experience"] = expObjArray;
        req.body["education"] = eduObjArray;
        req.body["project"] = projectObjArray;
        req.body["skill"] = skillObjArray;
        // req.body["project"] = [];
        // req.body["skill"] = [];
    
        const newUser = await User.create(req.body);
    
        res.status(201).json(newUser);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    console.log("Hello")
    const users = await User.find().populate('experience').populate('education').populate('project').populate('skill');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single user by ID - having some bug
router.get('byid/:id', async (req, res) => {
  try {
    console.log("Hello")
    const user = await User.findById(req.params.id).populate('experience').populate('education').populate('project').populate('skill');;
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:userName', async (req, res) => {
  try {
    const user = await User.findOne({ userName: req.params.userName }).populate('experience').populate('education').populate('project').populate('skill');;
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/checkUserNameAvailable/:userName', async (req, res) => {
    try 
    {
        const user = await User.findOne({ userName: req.params.userName });
        if (user) {
            res.json({"isAvailable": false});
        } else {
            res.json({"isAvailable": true});
        }
    } 
    catch (error) 
    {
      res.status(500).json({ message: error.message });
    }
  });

// Update a user
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('experience').populate('education').populate('project').populate('skill');;
    if (user) 
    {
        //delete existing experience, education, projects, skills
        for(let exp of user.experience)
        {
            await Experience.findByIdAndDelete(exp["_id"]);
        }
        for(let edu of user.education)
        {
            await Education.findByIdAndDelete(edu["_id"]);
        }
        for(let proj of user.project)
        {
            await Project.findByIdAndDelete(proj["_id"]);
        }
        for(let sk of user.skill)
        {
            await Skill.findByIdAndDelete(sk["_id"]);
        }


        let expObjArray = [];
        for(let exp of req.body["experience"])
        {
            let newExp = await Experience.create(exp);
            expObjArray.push(newExp["_id"])
        }
    
        let eduObjArray = [];
        for(let edu of req.body["education"])
        {
            let newEdu = await Education.create(edu);
            eduObjArray.push(newEdu["_id"])
        }
        console.log(eduObjArray)
    
        let projectObjArray = [];
        for(let proj of req.body["project"])
        {
            let newProject = await Project.create(proj);
            projectObjArray.push(newProject["_id"])
        }
        console.log(projectObjArray)
    
        let skillObjArray = [];
        for(let sk of req.body["skill"])
        {
            let newSkill = await Skill.create(sk);
            skillObjArray.push(newSkill["_id"])
        }
        console.log(skillObjArray)
    
        req.body["experience"] = expObjArray;
        req.body["education"] = eduObjArray;
        req.body["project"] = projectObjArray;
        req.body["skill"] = skillObjArray;

        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.json(updatedUser);
    } 
    else
    {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    // soft delete
    // const user = await User.findById(req.params.id);
    // user.isDeleted = true;
    // const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted', user: deletedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
