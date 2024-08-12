const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  positionName: { type: String, required: true },
  showDates: { type: Boolean, default: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  isCurrentJob: { type: Boolean, default: false },
  companyName: { type: String, required: true },
  companyCity: { type: String },
  companyState: { type: String },
  companyCountry: { type: String },
  awards: { type: String },
  summary: { type: String },
  useBulletoints: { type: Boolean, default: false },
  bulletPoints: [{ type: String }],
  companyLink: { type: String },
  photoUrl: { type: String }
});

const Experience = mongoose.model('Experience', experienceSchema);

module.exports = Experience;
