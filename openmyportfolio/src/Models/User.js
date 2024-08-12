class User {
constructor() {
    this.userName = '';
    this.firstName = '';
    this.lastName = '';
    this.email ='';
    this.pronouns ='';
    this.usePronouns = false;
    this.mainCaption = '';
    this.subCaption = '';
    this.showSubcaption = false;
    this.resumeLink = '';
    this.showSummary = true;
    this.summary = '';
    this.photoUrl = '';
    this.social = {};
    this.endCaption = '';
    this.showEndcaptionSection = false;
    this.endSubCaption = '';
    this.customSection = [];
    this.showEducation = false;
    this.showExperience = false;
    this.showSkills = false;
    this.showProject = false;
    this.isDeleted = false;
    this.education = ([]).map(education => new Education(education));
    this.project = ([]).map(project => new Project(project));
    this.experience = ([]).map(experience => new Experience(experience));
    this.skill = ([]).map(skill => new Skill(skill));
}
}

class Education {
constructor() {
    this.collegeName = '';
    this.degreeName = '';
    this.courseName = '';
    this.showDates = false;
    this.startDate ='';
    this.endDate = '';
    this.isCurrentDegree = false;
    this.expectedGraduation =  null;
    this.collegeCity = '';
    this.collegeState = '';
    this.collegeCountry = '';
    this.collegeLink = '';
    this.showGPA = false;
    this.gpa = 0;
    this.showSummary = false;
    this.summary = '';
    this.useBulletPoints = false;
    this.bulletPoints = [];
    this.showCourse = false;
    this.courses = [];
    this.photoUrl = '';
}
}

class Project {
constructor() {
    this.projectName = '';
    this.caption = '';
    this.subCaption = '';
    this.showSummary = false;
    this.summary = '';
    this.useBulletPoints = false;
    this.bulletPoints = [];
    this.showDates = false;
    this.startDate = '';
    this.endDate = '';
    this.githubLink = '';
    this.projectLink = '';
    this.socialLink = '';
    this.otherLink = '';
    this.photoUrl = '';
    this.technologiesUsed = [];
}
}

class Experience {
constructor() {
    this.positionName = '';
    this.showDates = false;
    this.startDate = '';
    this.endDate =  null;
    this.isCurrentJob =  false;
    this.companyName = '';
    this.companyCity = '';
    this.companyState = '';
    this.companyCountry = '';
    this.awards = '';
    this.summary = '';
    this.useBulletoints = false;
    this.bulletPoints = [];
    this.companyLink = '';
    this.photoUrl = '';
}
}

class Skill {
constructor() {
    this.categoryName = '';
    this.skills = [];
}
}

export { User, Education, Project, Experience, Skill };
