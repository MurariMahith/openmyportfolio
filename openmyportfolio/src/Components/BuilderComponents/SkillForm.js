import React, { useState } from 'react';
import { Skill } from '../../Models/User';
import RequiredBadge from '../ReusableComponents/RequiredBadge';
import Badge from '../ReusableComponents/Badge';

function SkillForm({ skill, onDelete, onSkillChange  }) {
  const [formData, setFormData] = useState(skill ?? new Skill());

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    const updatedSkill = {
      ...skill,
      [name]: value,
    };
    onSkillChange(updatedSkill);
    setFormData({ ...formData, [name]: newValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // onSubmit(formData);
  };

  return (
    <div class="container">
        <h1>Skill {formData.categoryName ? `(${formData.categoryName})` : ''}</h1>
        <div class="form-group">
            <label for="categoryName">Category Name:</label> <RequiredBadge />
            <input type="text" class="form-control" id="categoryName" name="categoryName" value={formData.categoryName} onChange={handleInputChange} />
        </div>
        <div class="form-group">
            <label for="skills">Skills:</label> <RequiredBadge /> <Badge msg="comma seperated values" />
            <textarea class="form-control" id="skills" name="skills" value={formData.skills ? formData.skills : ''} onChange={handleInputChange} />
        </div>
    </div>

  );
}

export default SkillForm;
