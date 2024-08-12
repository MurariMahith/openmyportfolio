const mongoose = require('mongoose');

// Project Schema
const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  caption: { type: String },
  subCaption: { type: String },
  showSummary: { type: Boolean, default: true },
  summary: { type: String },
  useBulletPoints: { type: Boolean, default: false },
  bulletPoints: [{ type: String }],
  showDates: { type: Boolean, default: true },
  startDate: { type: Date },
  endDate: { type: Date },
  githubLink: { type: String },
  projectLink: { type: String },
  socialLink: { type: String },
  otherLink: { type: String },
  photoUrl: { type: String },
  technologiesUsed: [{ type: String }]
});

const Project = mongoose.model('Project', projectSchema);


module.exports = Project;
