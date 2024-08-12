import React, { useState, useEffect } from 'react';
import EducationForm from './BuilderComponents/EducationForm';
import ExperienceForm from './BuilderComponents/ExperienceForm';
import ProjectForm from './BuilderComponents/ProjectForm';
import SkillForm from './BuilderComponents/SkillForm';
import RequiredBadge from './ReusableComponents/RequiredBadge';
import Badge from './ReusableComponents/Badge';
import { User } from '../Models/User';
import { useParams } from 'react-router-dom';

function EditBuilder() {


    const [formData, setFormData] = useState(new User());
    const [formErrors, setFormErrors] = useState([]);
    {
    // userName: '',
    // firstName: '',
    // lastName: '',
    // email: '',
    // pronouns: '',
    // usePronouns: true,
    // mainCaption: '',
    // subCaption: '',
    // showSubcaption: true,
    // resumeLink: '',
    // photoUrl: '',
    // social: {
    //     facebook: '',
    //     instagram: '',
    //     github: '',
    //     email: '',
    //     twitter: ''
    // },
    // endCaption: '',
    // showEndcaptionSection: true,
    // endSubCaption: '',
    // customSection: [
    //     {
    //     title: '',
    //     subtitle: '',
    //     link: ''
    //     }
    // ],
    // showEducation: true,
    // showExperience: true,
    // showSkills: true,
    // showProjects: true,
    // isDeleted: false
    // });
    }
    const [experiences, setExperiences] = useState([]);
    const [education, setEducation] = useState([]);
    const [skill, setSkill] = useState([]);
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const isIdPassed = id !== undefined && id !== null;
    console.log("Id passed: " + isIdPassed)


    useEffect(() => {
        // Fetch data when the component mounts
        const fetchUserData = async () => {
          try {
            const response = await fetch(`http://localhost:3000/user/${id}`);
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data);
            setLoading(false);
            setFormData(data)
            setExperiences([...experiences, ...data.experience])
            setEducation([...education, ...data.education])
            setSkill([...skill, ...data.skill])
            setProject([...project, ...data.project])
            //setExperiences([...experiences, ...data.experience])
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        };
    
        fetchUserData();
    
        // Cleanup function
        return () => {
          // Any cleanup code if needed
        };
      }, [id]);


    const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
    };

    const handleSocialInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        social: {
        ...formData.social,
        [name]: value
        }
    });
    };

    const handleAddExperience = () => {
    setExperiences([...experiences, { /* Initial experience object */ }]);
    };

    const handleDeleteExperience = (index) => {
        const updatedExperiences = experiences.filter((exp, i) => i !== index);
        setExperiences(updatedExperiences);
    };

    const handleExperienceChange = (index, updatedExperience) => {
        setExperiences(prevExperiences => {
            console.log(updatedExperience)
            const newExperiences = [...prevExperiences];
            newExperiences[index] = updatedExperience;
            setExperiences([...newExperiences]);
            return newExperiences;
        });
    };

    const handleAddEducation = () => {
        setEducation([...education, { /* Initial experience object */ }]);
    };

    const handleDeleteEducation = (index) => {
        const updatedEducation = education.filter((edu, i) => i !== index);
        setEducation(updatedEducation);
    };

    const handleEducationChange = (index, updatedEducation) => {
        setEducation(prevEducation => {
            console.log(updatedEducation)
            const newEducation = [...prevEducation];
            newEducation[index] = updatedEducation;
            setEducation([...newEducation]);
            return newEducation;
        });
    };

    const handleAddSkill = () => {
        setSkill([...skill, { /* Initial experience object */ }]);
    };

    const handleDeleteSkill = (index) => {
        const updatedSkill = skill.filter((sk, i) => i !== index);
        setSkill(updatedSkill);
    };

    const handleSkillChange = (index, updatedSkill) => {
        setSkill(prevSkill => {
            const newSkill = [...prevSkill];
            newSkill[index] = updatedSkill;
            setSkill([...newSkill]);
            return newSkill;
        });
    };

    const handleAddProject = () => {
        setProject([...project, { /* Initial experience object */ }]);
    };

    const handleDeleteProject = (index) => {
        const updatedProject = project.filter((prj, i) => i !== index);
        setProject(updatedProject);
    };

    const handleProjectChange = (index, updatedProject) => {
        setProject(prevProject => {
            console.log(updatedProject)
            const newProjects = [...prevProject];
            newProjects[index] = updatedProject;
            setProject([...newProjects]);
            return newProjects;
        });
    };
    
    
    
    // const handleCustomSectionChange = (e, index) => {
    // const { name, value } = e.target;
    // const updatedCustomSections = formData.customSection.map((section, i) =>
    //     i === index ? { ...section, [name]: value } : section
    // );
    // setFormData({ ...formData, customSection: updatedCustomSections });
    // };

    let validateUserdata = (user) => {

        setFormErrors([...formErrors, "hello"])
    };

    const required = ["firstName", "lastName", "email", "mainCaption"]

    const handleSubmit = (e) => {
        alert("form submitted")
        e.preventDefault();
        let newUser = new User();
        newUser = {...formData}
        newUser.experience = [...experiences];
        validateUserdata(newUser);
    };

  return (
    <>
    {formErrors.length > 0 ? <h3>Form Validation Errors</h3> : ''}
    <ul>
    {formErrors.length > 0 ? formErrors.map((fe,idx) => <li key={idx}>{fe}</li>) : <li>Start filling Form please</li>}
    </ul>
    <form onSubmit={handleSubmit} className="container">
    <div class="form-group">
        <label for="userName">Username:</label> 
        <input type="text" class="form-control" id="userName" name="userName" value={formData.userName} onChange={handleInputChange} readOnly/>
    </div>
    <div class="form-group">
        <label for="firstName">First Name:</label> <RequiredBadge />
        <input type="text" class="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required/>
    </div>
    <div class="form-group">
        <label for="lastName">Last Name:</label> <RequiredBadge />
        <input type="text" class="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
    </div>
    <div class="form-group">
        <label for="email">Email:</label> <RequiredBadge />
        <input type="email" class="form-control" id="email" name="email" value={formData.email} onChange={handleInputChange} />
    </div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="usePronouns" name="usePronouns" checked={formData.usePronouns} onChange={handleInputChange} />
        <label class="form-check-label" for="usePronouns">Use Pronouns:</label>
    </div>
    <div class="form-group">
        <label for="pronouns">Pronouns:</label>
        <input type="text" class="form-control" id="pronouns" name="pronouns" value={formData.pronouns} onChange={handleInputChange} disabled={!formData.usePronouns} />
    </div>
    <div class="form-group">
        <label for="mainCaption">Main Caption:</label> <RequiredBadge />
        <input type="text" class="form-control" id="mainCaption" name="mainCaption" value={formData.mainCaption} onChange={handleInputChange} required/>
    </div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="showSummary" name="showSummary" checked={formData.showSummary} onChange={handleInputChange} />
        <label class="form-check-label" for="showSummary">Show Summary:</label>
    </div>
    <div class="form-group">
        <label for="subCaption">Summary:</label> <Badge msg="impactful" />
        <textarea type="text" class="form-control" id="summary" name="summary" value={formData.summary} onChange={handleInputChange} disabled={!formData.showSummary} />
    </div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="showSubcaption" name="showSubcaption" checked={formData.showSubcaption} onChange={handleInputChange} />
        <label class="form-check-label" for="showSubcaption">Show Subcaption:</label>
    </div>
    <div class="form-group">
        <label for="subCaption">Sub Caption:</label> <Badge msg="optional" />
        <input type="text" class="form-control" id="subCaption" name="subCaption" value={formData.subCaption} onChange={handleInputChange} disabled={!formData.showSubcaption} />
    </div>
    <div class="form-group">
        <label for="resumeLink">Resume Link:</label> <Badge msg="impactful" />
        <input type="text" class="form-control" id="resumeLink" name="resumeLink" value={formData.resumeLink} onChange={handleInputChange} />
    </div>
    <div class="form-group">
        <label for="photoUrl">Photo URL:</label> <Badge msg="goodToHave" />
        <input type="text" class="form-control" id="photoUrl" name="photoUrl" value={formData.photoUrl} onChange={handleInputChange} />
    </div>
    <div class="form-group">
        <label for="facebook">Facebook:</label>
        <input type="text" class="form-control" id="facebook" name="facebook" value={formData.social.facebook} onChange={handleSocialInputChange} />
    </div>
    <div class="form-group">
        <label for="instagram">Instagram:</label>
        <input type="text" class="form-control" id="instagram" name="instagram" value={formData.social.instagram} onChange={handleSocialInputChange} />
    </div>
    <div class="form-group">
        <label for="github">Github:</label> <Badge msg="goodToHave" />
        <input type="text" class="form-control" id="github" name="github" value={formData.social.github} onChange={handleSocialInputChange} />
    </div>
    <div class="form-group">
        <label for="socialEmail">Email:</label> <Badge msg="goodToHave" />
        <input type="text" class="form-control" id="socialEmail" name="socialEmail" value={formData.social.email} onChange={handleSocialInputChange} />
    </div>
    <div class="form-group">
        <label for="twitter">Twitter:</label>
        <input type="text" class="form-control" id="twitter" name="twitter" value={formData.social.twitter} onChange={handleSocialInputChange} />
    </div>
    <div class="form-check">
        <input type="checkbox" class="form-check-input" id="showEndcaptionSection" name="showEndcaptionSection" checked={formData.showEndcaptionSection} onChange={handleInputChange} />
        <label class="form-check-label" for="showEndcaptionSection">Show Endcaption Section:</label>
    </div>
    <div class="form-group">
        <label for="endCaption">End Caption:</label> <Badge msg="optional" />
        <input type="text" class="form-control" id="endCaption" name="endCaption" value={formData.endCaption} onChange={handleInputChange} disabled={!formData.showEndcaptionSection} />
    </div>
    <div class="form-group">
        <label for="endSubCaption">End Subcaption:</label>
        <input type="text" class="form-control" id="endSubCaption" name="endSubCaption" value={formData.endSubCaption} onChange={handleInputChange} disabled={!formData.showEndcaptionSection} />
    </div>
    <div className="form-check show-section">
        <input type="checkbox" class="form-check-input" id="showExperience" name="showExperience" checked={formData.showExperience} onChange={handleInputChange} />
        <label class="form-check-label" for="showExperience">Show Experience Section:</label> <Badge msg="impactful" />
        { formData.showExperience ? <div className="btn btn-primary float-right" onClick={handleAddExperience}>Add Experience</div> : ''}
        
    </div>

      {
        formData.showExperience ?       
        <div className='experience-section'>
            {experiences.map((experience, index) => (
                <ExperienceForm
                key={index}
                experience={experience}
                onDelete={() => handleDeleteExperience(index)}
                onExperienceChange={(updatedExperience) => handleExperienceChange(index, updatedExperience)}
                />
            ))}
            {/* <button >Exp Submit</button> */}
        </div>
        
        : ''
      }

    <div className='form-check show-section'>
        <input type="checkbox" class="form-check-input" id="showEducation" name="showEducation" checked={formData.showEducation} onChange={handleInputChange} />
        <label class="form-check-label" for="showEducation">Show Education Section:</label> <Badge msg="impactful" />
        { formData.showEducation ? <div className="btn btn-primary float-right" onClick={handleAddEducation}>Add Education</div> : ''}
    </div>

      {/* Education */}
    {
    formData.showEducation ?       
    <div className='education-section'>
        {/* <button className="btn btn-primary float-right" onClick={handleAddEducation}>Add Education</button><br></br><br></br> */}
        {education.map((education, index) => (
            <EducationForm
            key={index}
            education={education}
            onDelete={() => handleDeleteEducation(index)}
            onEducationChange={(updatedEducation) => handleEducationChange(index, updatedEducation)}
            />
        ))}
        {/* <button >Exp Submit</button> */}
    </div>
    
    : ''
    }


      {/* Project section */}

      <div className='form-check show-section'>
        <input type="checkbox" class="form-check-input" id="showProject" name="showProject" checked={formData.showProject} onChange={handleInputChange} />
        <label class="form-check-label" for="showProject">Show Projects Section:</label> <Badge msg="impactful" />
        { formData.showProject ? <div className="btn btn-primary float-right" onClick={handleAddProject}>Add Project</div> : ''}
      </div>

      {
        formData.showProject ?       
        <div className='project-section'>
            {project.map((project, index) => (
                <ProjectForm
                key={index}
                project={project}
                onDelete={() => handleDeleteProject(index)}
                onProjectChange={(updatedProject) => handleProjectChange(index, updatedProject)}
                />
            ))}
        </div>
        
        : ''
        }

      {/* Skill section */}
      <div className='form-check show-section'>
        <input type="checkbox" class="form-check-input" id="showSkills" name="showSkills" checked={formData.showSkills} onChange={handleInputChange} />
        <label class="form-check-label" for="showSkills">Show Skill Section:</label> <Badge msg="impactful" />
        { formData.showSkills ? <div className="btn btn-primary float-right" onClick={handleAddSkill}>Add Skill</div> : ''}
      </div>
      {
        formData.showSkills ?       
        <div className='skill-section'>
            {skill.map((skill, index) => (
                <SkillForm
                key={index}
                skill={skill}
                onDelete={() => handleDeleteSkill(index)}
                onSkillChange={(updatedSkill) => handleSkillChange(index, updatedSkill)}
                />
            ))}
        </div>
        
        : ''
        }
        <br></br>
        <br></br>
        <button type="submit" class="btn btn-primary">Main Submit</button>
    </form>
    </>
  );
}

export default EditBuilder;
