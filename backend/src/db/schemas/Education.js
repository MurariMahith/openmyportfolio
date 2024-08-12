const mongoose = require('mongoose');

// College Schema
const educationSchema = new mongoose.Schema({
  collegeName: { type: String, required: true },
  degreeName: { type: String },
  courseName: { type: String },
  showDates: { type: Boolean, default: true },
  startDate: { type: Date },
  endDate: { type: Date },
  isCurrentDegree: { type: Boolean, default: false },
  expectedGraduation: { type: Date },
  collegeCity: { type: String },
  collegeState: { type: String },
  collegeCountry: { type: String },
  collegeLink: { type: String },
  showGPA: { type: Boolean, default: true },
  gpa: { type: Number },
  showSummary: { type: Boolean, default: true },
  summary: { type: String },
  useBulletPoints: { type: Boolean, default: false },
  bulletPoints: [{ type: String }],
  showCourse: { type: Boolean, default: true },
  courses: [{ type: String }],
  photoUrl: { type: String }
});

const Education = mongoose.model('Education', educationSchema);

module.exports = Education;
