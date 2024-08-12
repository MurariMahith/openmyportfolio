import React, { useState } from 'react';
import { Education } from '../../Models/User';
import RequiredBadge from '../ReusableComponents/RequiredBadge'
import Badge from '../ReusableComponents/Badge';

function EducationForm({ education, onDelete, onEducationChange }) {
  const [formData, setFormData] = useState(education ?? new Education());

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value; 
    const updatedEducation = {
        ...education,
        [name]: value,
    };
    onEducationChange(updatedEducation);
    setFormData({ ...formData, [name]: newValue });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
<div class="container">
    <h1> Education{formData.collegeName ? ` at ${formData.collegeName}` : ""}</h1>
  <div class="form-group">
    <label for="collegeName">College Name:</label>  <RequiredBadge />
    <input type="text" class="form-control" id="collegeName" name="collegeName" value={formData.collegeName} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="degreeName">Degree Name:</label> <RequiredBadge />
    <input type="text" class="form-control" id="degreeName" name="degreeName" value={formData.degreeName} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="courseName">Course Name:</label> <RequiredBadge />
    <input type="text" class="form-control" id="courseName" name="courseName" value={formData.courseName} onChange={handleInputChange} />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="showDates" name="showDates" checked={formData.showDates} onChange={handleInputChange} />
    <label class="form-check-label" for="showDates">Show Dates:</label> <Badge msg="goodToHave" />
  </div>
  <div class="form-group">
    <label for="startDate">Start Date:</label>
    <input type="date" class="form-control" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} disabled={!formData.showDates}/>
  </div>
  <div class="form-group">
    <label for="endDate">End Date:</label>
    <input type="date" class="form-control" id="endDate" name="endDate" value={formData.endDate} onChange={handleInputChange} disabled={!formData.showDates} />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="isCurrentDegree" name="isCurrentDegree" checked={formData.isCurrentDegree} onChange={handleInputChange} disabled={!formData.showDates} />
    <label class="form-check-label" for="isCurrentDegree">Is Current Degree:</label>
  </div>
  <div class="form-group">
    <label for="expectedGraduation">Expected Graduation:</label>
    <input type="date" class="form-control" id="expectedGraduation" name="expectedGraduation" value={formData.expectedGraduation} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="collegeCity">College City:</label> <Badge msg="goodToHave" />
    <input type="text" class="form-control" id="collegeCity" name="collegeCity" value={formData.collegeCity} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="collegeState">College State:</label>
    <input type="text" class="form-control" id="collegeState" name="collegeState" value={formData.collegeState} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="collegeCountry">College Country:</label>
    <input type="text" class="form-control" id="collegeCountry" name="collegeCountry" value={formData.collegeCountry} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="collegeLink">College Link:</label> <Badge msg="optional" />
    <input type="text" class="form-control" id="collegeLink" name="collegeLink" value={formData.collegeLink} onChange={handleInputChange} />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="showGPA" name="showGPA" checked={formData.showGPA} onChange={handleInputChange} />
    <label class="form-check-label" for="showGPA">Show GPA:</label> <Badge msg="impactful" />
  </div>
  <div class="form-group">
    <label for="gpa">GPA:</label>
    <input type="number" class="form-control" id="gpa" name="gpa" value={formData.gpa} onChange={handleInputChange}  disabled={!formData.showGPA}/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="showSummary" name="showSummary" checked={formData.showSummary} onChange={handleInputChange} />
    <label class="form-check-label" for="showSummary">Show Summary:</label>
  </div>
  <div class="form-group">
    <label for="summary">Summary:</label> <Badge msg="impactful" />
    <textarea class="form-control" id="summary" name="summary" value={formData.summary} onChange={handleInputChange}  disabled={!formData.showSummary}></textarea>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="useBulletPoints" name="useBulletPoints" checked={formData.useBulletPoints} onChange={handleInputChange} />
    <label class="form-check-label" for="useBulletPoints">Use Bullet Points:</label>
  </div>
  <div class="form-group">
    <label for="bulletPoints">Bullet Points:</label>
    <input type="text" class="form-control" id="bulletPoints" name="bulletPoints" value={formData.bulletPoints} onChange={handleInputChange}  disabled={!formData.useBulletPoints}/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="showCourse" name="showCourse" checked={formData.showCourse} onChange={handleInputChange} />
    <label class="form-check-label" for="showCourse">Show Course:</label>
  </div>
  <div class="form-group">
    <label for="courses">Courses:</label>
    <input type="text" class="form-control" id="courses" name="courses" value={formData.courses} onChange={handleInputChange}  disabled={!formData.showCourse}/>
  </div>
  <div class="form-group">
    <label for="photoUrl">Photo URL:</label>
    <input type="text" class="form-control" id="photoUrl" name="photoUrl" value={formData.photoUrl} onChange={handleInputChange} />
  </div>
  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
</div>

  );
}

export default EducationForm;
