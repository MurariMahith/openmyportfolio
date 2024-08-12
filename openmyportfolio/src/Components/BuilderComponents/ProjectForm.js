import React, { useState } from 'react';
import { Project } from '../../Models/User';
import RequiredBadge from '../ReusableComponents/RequiredBadge';
import Badge from '../ReusableComponents/Badge';

function ProjectForm({ project, onDelete, onProjectChange }) {
  const [formData, setFormData] = useState(project ?? new Project());

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    const updatedProject = {
        ...project,
        [name]: value,
    };
    onProjectChange(updatedProject);
    setFormData({ ...formData, [name]: newValue });
  };

  return (
<div class="container">
    <h1>Project {formData.projectName ? `(${formData.projectName})` : ''}</h1>
    <div class="form-group">
        <label for="projectName">Project Name:</label> <RequiredBadge />
        <input type="text" class="form-control" id="projectName" name="projectName" value={formData.projectName} onChange={handleInputChange} />
    </div>
    <div class="form-group">
        <label for="caption">Caption:</label> <Badge msg="goodToHave" />
        <input type="text" class="form-control" id="caption" name="caption" value={formData.caption} onChange={handleInputChange} />
    </div>
    <div class="form-group">
        <label for="subCaption">Sub Caption:</label>
        <input type="text" class="form-control" id="subCaption" name="subCaption" value={formData.subCaption} onChange={handleInputChange} />
    </div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="showSummary" name="showSummary" checked={formData.showSummary} onChange={handleInputChange} />
        <label class="form-check-label" for="showSummary">Show Summary:</label>
    </div>
    <div class="form-group">
        <label for="summary">Summary:</label> <Badge msg="impacftful" />
        <textarea class="form-control" id="summary" name="summary" value={formData.summary} onChange={handleInputChange} disabled={!formData.showSummary} />
    </div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="useBulletPoints" name="useBulletPoints" checked={formData.useBulletPoints} onChange={handleInputChange} />
        <label class="form-check-label" for="useBulletPoints">Use Bullet Points:</label>
    </div>
    <div class="form-group">
        <label for="bulletPoints">Bullet Points:</label>
        <input type="text" class="form-control" id="bulletPoints" name="bulletPoints" value={formData.bulletPoints} onChange={handleInputChange} disabled={!formData.useBulletPoints} />
    </div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="showDates" name="showDates" checked={formData.showDates} onChange={handleInputChange} />
        <label class="form-check-label" for="showDates">Show Dates:</label>
    </div>
    <div class="form-group">
        <label for="startDate">Start Date:</label>
        <input type="date" class="form-control" id="startDate" name="startDate" value={formData.startDate} onChange={handleInputChange} disabled={!formData.showDates} />
    </div>
    <div class="form-group">
        <label for="endDate">End Date:</label>
        <input type="date" class="form-control" id="endDate" name="endDate" value={formData.endDate} onChange={handleInputChange} disabled={!formData.showDates} />
    </div>
    <div class="form-group">
        <label for="githubLink">Github Link:</label> <Badge msg="impactful" />
        <input type="text" class="form-control" id="githubLink" name="githubLink" value={formData.githubLink} onChange={handleInputChange} />
    </div>
    <div class="form-group">
        <label for="projectLink">Project Link:</label> <Badge msg="impactful" />
        <input type="text" class="form-control" id="projectLink" name="projectLink" value={formData.projectLink} onChange={handleInputChange} />
    </div>
    <div class="form-group">
        <label for="photoUrl">Photo URL:</label>
        <input type="text" class="form-control" id="photoUrl" name="photoUrl" value={formData.photoUrl} onChange={handleInputChange} />
    </div>
    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
</div>

  );
}

export default ProjectForm;
