/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Jon Silva",
    "role": "SR Specialist Application Developer",
    "contacts": {
        "mobile": "314-971-3616",
        "email": "mrjonsilva@gmail.com",
        "github": "jonsilva",
        "twitter": "@silva111",
        "location": "Saint Louis"
    },
    "welcomeMessage": "Senior Specialist Application Developer with over 15 years of experience as a technical professional. A dedicated and energetic employee with experience in programming, database development, project management, testing and quality management. Strong leadership skills; able to prioritize, delegate tasks and make sound decisions.",
    "skills": [
        "awesomeness", "programming", "teaching", "JS"
    ],
    "biopic": "./images/fry.jpg",
    "display": function() {
        $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
            .prepend(HTMLheaderName.replace("%data%", bio.name))
            .append(HTMLbioPic.replace("%data%", bio.biopic));
        for (var contact in bio.contacts) {
            $("#topContacts, #footerContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]));
           // $("#footerContacts").append(HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]));
    	}        	
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var skill = 0; skill < bio.skills.length; skill++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
            }
        }
    }
};
bio.display();

var education = {
    "schools": [{
        "name": "ITT Technical Institute",
        "location": "Earth City, MO, US",
        "degree": "Assocate of Applied Science in Electrical Engineering",
        "majors": ["Electrical Engineering"],
        "dates": "1998 - 2000",
        "url": "http:/www.itt.com"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016 - Current",
        "url": "http://www.udacity.com/course/nd001"
    }, {
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com/course/ud804"
    }, {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com/course/ud304"
    }],
    "display": function() {
        $("#education").append(HTMLschoolStart);
        if (education.schools.length > 0) {
            for (var school = 0; school < education.schools.length; school++) {
                $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
                $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
                $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
                $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].majors));
            }
            if (education.onlineCourses.length > 0) {
                $(".education-entry:last").append(HTMLonlineClasses);
                for (var school = 0; school < education.onlineCourses.length; school++) {
                    $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school));
                    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates));
                    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[school].url));
                }
            }
        }
    }
};
education.display();

var work = {
    "jobs": [{
        "employer": "AT&T",
        "title": "SR Specialist Application Developer",
        "location": "Earth City, MO, US",
        "dates": "2013 - Current",
        "description": "Trying to keep up"

    }, {
        "employer": "AT&T",
        "title": "Network Center Technician",
        "location": "Earth City, MO, US",
        "dates": "2000 - 2013",
        "description": "Trying to find my place"
    }],
    "display": function() {
    	if (work.jobs.length > 0) {
	        for (var job = 0; job < work.jobs.length; job++) {
	            $("#workExperience").append(HTMLworkStart);
	            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	            var formattedEmployerTitle = formattedEmployer + formattedTitle;
	            $(".work-entry:last").append(formattedEmployerTitle);
	            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	            $(".work-entry:last").append(formattedLocation);
	            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	            $(".work-entry:last").append(formattedDates);
	            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	            $(".work-entry:last").append(formattedDescription);
	        }    		
    	}
    }
};
work.display();

var projects = {
    "projects": [{
        "title": "Verse 1.1",
        "dates": "2015 - 2016",
        "description": "Here's a little story I'd like to tell.",
        "images": ["./images/197x148.gif"]
    }, {
        "title": " Verse 1.2",
        "dates": "2015 - 2016",
        "description": "About 3 bad brothers you know so well.",
        "images": ["./images/197x148.gif","./images/197x148.gif"]
    }, {
        "title": "Verse 1.3",
        "dates": "2015 - 2016",
        "description": "It started way back in history...",
        "images": ["./images/197x148.gif"]
    }],
    "display": function() {
        if (projects.projects.length > 0) {
            for (var project = 0; project < projects.projects.length; project++) {
                $("#projects").append(HTMLprojectStart);
                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                $(".project-entry:last").append(formattedProjectTitle);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                $(".project-entry:last").append(formattedProjectDates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                $(".project-entry:last").append(formattedProjectDescription);
                if (projects.projects[project].images.length > 0){
                    for (var image = 0; image < projects.projects[project].images.length; image++) {
                        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                        $(".project-entry:last").append(formattedProjectImage);        
                    }
                }
            }
        }
    }
};
projects.display();

$("#mapDiv").append(googleMap);