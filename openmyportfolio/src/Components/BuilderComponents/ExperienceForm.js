import React, { useState } from 'react';
import { Experience } from '../../Models/User';
import RequiredBadge from '../ReusableComponents/RequiredBadge'
import Badge from '../ReusableComponents/Badge';

function ExperienceForm({ experience, onDelete, onExperienceChange }) {
  const [formData, setFormData] = useState(experience);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value; 
    const updatedExperience = {
        ...experience,
        [name]: value,
    };
    onExperienceChange(updatedExperience);
    setFormData({ ...formData, [name]: newValue });
  };


  return (
<div class="container">
  <h1>Experience {formData.positionName ? `as ${formData.positionName}` : ''}</h1>
  <div class="form-group">
    <label for="positionName">Position Name:</label> <RequiredBadge />
    <input type="text" class="form-control" id="positionName" name="positionName" value={formData.positionName} onChange={handleInputChange} required/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="showDates" name="showDates" checked={formData.showDates} onChange={handleInputChange} />
    <label class="form-check-label" for="showDates">Show Dates:</label> <Badge msg="goodToHave" />
  </div>
  <div class="form-group">
    <label for="startDate">Start Date:</label>
    <input type="date" class="form-control" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} disabled={!formData.showDates} />
  </div>
  <div class="form-group">
    <label for="endDate">End Date:</label>
    <input type="date" class="form-control" id="endDate" name="endDate" value={formData.endDate} onChange={handleInputChange} disabled={!formData.showDates} />
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="isCurrentJob" name="isCurrentJob" checked={formData.isCurrentJob} onChange={handleInputChange} disabled={!formData.showDates} />
    <label class="form-check-label" for="isCurrentJob">Is Current Job:</label>
  </div>
  <div class="form-group">
    <label for="companyName">Company Name:</label> <RequiredBadge />
    <input type="text" class="form-control" id="companyName" name="companyName" value={formData.companyName} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="companyCity">Company City:</label>
    <input type="text" class="form-control" id="companyCity" name="companyCity" value={formData.companyCity} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="companyState">Company State:</label>
    <input type="text" class="form-control" id="companyState" name="companyState" value={formData.companyState} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="companyCountry">Company Country:</label>
    <input type="text" class="form-control" id="companyCountry" name="companyCountry" value={formData.companyCountry} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="awards">Awards:</label>
    <input type="text" class="form-control" id="awards" name="awards" value={formData.awards} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="summary">Summary:</label> <Badge msg="impactful" />
    <textarea class="form-control" id="summary" name="summary" value={formData.summary} onChange={handleInputChange}></textarea>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="useBulletoints" name="useBulletoints" checked={formData.useBulletoints} onChange={handleInputChange} />
    <label class="form-check-label" for="useBulletoints">Use Bullet Points:</label>
  </div>
  <div class="form-group">
    <label for="bulletPoints">Bullet Points:</label>
    <input type="text" class="form-control" id="bulletPoints" name="bulletPoints" value={formData.bulletPoints} onChange={handleInputChange} disabled={!formData.useBulletoints} />
  </div>
  <div class="form-group">
    <label for="companyLink">Company Link:</label> 
    <input type="text" class="form-control" id="companyLink" name="companyLink" value={formData.companyLink} onChange={handleInputChange} />
  </div>
  <div class="form-group">
    <label for="photoUrl">Photo URL:</label> <Badge msg="goodToHave" />
    <input type="text" class="form-control" id="photoUrl" name="photoUrl" value={formData.photoUrl} onChange={handleInputChange} />
  </div>
  {/* <button type="submit" class="btn btn-primary">Submit</button> */}
</div>

  );
}

export default ExperienceForm;
