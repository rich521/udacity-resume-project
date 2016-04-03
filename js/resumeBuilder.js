//JSON FILE DATA 
var bio = {
    "name": "Richard Strutt",
    "role": "  Web Developer Apprentice",
    "contacts": {
        "mobile": "+852 5547-3062",
        "email": "richard.strutt@bath.edu",
        "location": "Hong Kong",
        "github": "https://github.com/richardstrutt",
    },
    "welcomeMessage": "This is my first online resume. I am currently taking the web-developer Nanodegree (intermediate) on Udacity. <br>  My goal is to become a professional web-developer.",
    "skills": ["HTML5/CSS", "JavaScript", "Ruby", "Photoshop"],
    "biopic": "images/fry.jpg",
    "myLocation": "Hong Kong"
};

var education = {
    "schools": [{
        "name": "University of Bath",
        "location": "Bath, United Kingdon",
        "degree": "Bachelors",
        "majors": ["Chemical Engineer"],
        "dates": "2012 - 2015",
        "url": "http://www.bath.ac.uk"

    }, {
        "name": "Dulwich College Shanghai",
        "location": "Shanghai, China",
        "degree": "International Baccalaureate",
        "majors": ["Physics", " Maths"],
        "dates": "2009 - 2012",
        "url": "http://www.dulwich-shanghai.cn"

    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com"
    }, {
        "title": "Full-Stack Web Developer",
        "school": "Codecademy",
        "date": "2015",
        "url": "https://www.codecademy.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Yingde Gases",
        "title": "Process Engineer Intern",
        "dates": "June 2013 - August 2013",
        "location": "Beijing",
        "description": "I took an internship as an Engineer Trainee at Yingde Gases, the leading supplier of industrial gases from on-site plants in China. Learnt about cryogenic air separation and coal gasification processes. I was also able to work closely with Technical/Design Engineers to compute and size two-phase separators for the distillation plants. Assigned to do problem-solving tasks using Aspen Hysys V8 software, which is the leading software to design chemical processes. Visits were made to coal gasification and air separation plants that were both operational and under construction."
    }]
};

var projects = {
    "projects": [{
        "title": "Portfolio Mockup to HTML",
        "dates": "2016",
        "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
        "images": ["images/project_1.svg"]
    }]
};
//END of JSON

bio.display = function() {
    var data = "%data%";
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.myLocation);
    var formattedMessage = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedContactAll = formattedMobile + formattedEmail + formattedGitHub + formattedLocation;
    $("#header").prepend(formattedName, formattedRole).append(formattedBioPic, formattedMessage);
    $("#footerContacts").append(formattedContactAll);

    //Skills
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            //iterate and print each skill
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }
};

//Work 
work.display = function() {
    var data = "%data%";
    for (var j = 0; j < work.jobs.length; j++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[j].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[j].title);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[j].dates);
        var formattedLocation = HTMLworkLocation.replace(data, work.jobs[j].location);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[j].description);
        var formattedAll = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
        $(".work-entry:last").append(formattedAll);
    }
};
//Projects
projects.display = function() {
    var data = "%data%";
    for (var p = 0; p < projects.projects.length; p++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[p].title);
        var formattedDates = HTMLprojectDates.replace(data, projects.projects[p].dates);
        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[p].description);
        var formattedImage = HTMLprojectImage.replace(data, projects.projects[p].images);
        var formattedAll = formattedTitle + formattedDates + formattedDescription + formattedImage;
        $(".project-entry:last").append(formattedAll);
    }
};
//Eduction
education.display = function() {
    //Schools
    var data = "%data%";
    for (var s = 0; s < education.schools.length; s++) {
        $("#education").append(HTMLschoolStart);
        //adding the href link from eduaction.schools[s].url to the name of the school
        var formattedName = HTMLschoolName.replace(data, education.schools[s].name).replace("#", education.schools[s].url);
        var formattedDegree = HTMLschoolDegree.replace(data, education.schools[s].degree);
        var formattedMajor = HTMLschoolMajor.replace(data, education.schools[s].majors);
        var formattedDates = HTMLschoolDates.replace(data, education.schools[s].dates);
        var formattedLocation = HTMLschoolLocation.replace(data, education.schools[s].location);
        var formattedAll = formattedName + formattedDegree + formattedDates + formattedMajor + formattedLocation;
        $(".education-entry:last").append(formattedAll);
    }
    //onlineCourses
    for (var c = 0; c < education.onlineCourses.length; c++) {
        $("#education").append(HTMLonlineClasses);
        var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[c].title);
        var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[c].school);
        var formattedOnDates = HTMLonlineDates.replace(data, education.onlineCourses[c].date);
        var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[c].url).replace("#", education.onlineCourses[c].url);
        var formattedOnAll = formattedTitle + formattedSchool + formattedOnDates + formattedURL;
        $(".education-entry:last").append(formattedOnAll);
    }
};

//Internationalize name
function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}

//Function Calls
bio.display();
work.display();
projects.display();
education.display();

//Map & Button
$("#mapDiv").append(googleMap);
$("#header").prepend(internationalizeButton);