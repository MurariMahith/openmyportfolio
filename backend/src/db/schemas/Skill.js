const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    categoryName: { type: String, required: true },
    skills: [{ type: String }]
});

const Skill = mongoose.model('Skill', skillSchema); // Correct way to define the model

module.exports = Skill;
