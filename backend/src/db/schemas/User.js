const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  pronouns: { type: String },
  usePronouns: { type: Boolean, default: false },
  mainCaption: { type: String },
  subCaption: { type: String, default: true },
  showSubcaption: { type: Boolean, default: true },
  showSummary: {type: Boolean, default: true},
  summary: {type: String},
  resumeLink: { type: String },
  photoUrl: { type: String },
  social: { type: Object },
  endCaption: { type: String },
  showEndcaptionSection: { type: Boolean, default: true },
  endSubCaption: { type: String },
  customSection: { type: Array },
  showEducation: { type: Boolean, default: true },
  showExperience: { type: Boolean, default: true },
  showProject: { type: Boolean, default: true },
  showSkills: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  
  education: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Education', 
    }
  ],
  project: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Project', 
    }
  ],
  experience: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Experience',
    }
  ],
  skill: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Skill',
    }
  ]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
