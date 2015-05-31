
var educations = {
	"schools" : [
		{
			"name" : "EST",
			"location" : "sale",
			"degree" : "Licence",
			"majors" : ["CS"],
			"date" :  2013,
			"url" : "http://www.example.com" 	
		},

		{
			"name" : "EST",
			"location" : "sale",
			"degree" : "Licence",
			"majors" : ["CS"],
			"date" :  2013,
			"url" : "http://www.example.com" 	
		}
	],

	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"date" : 2014,
			"url"  : "http://www.udacity.com"
		},

		{
			"title" : "HTML",
			"school" : "Udacity",
			"date" : 2013,
			"url"  : "http://www.udacity.com"
		}
	],

	display : function() {
		for (school in educations.schools) {
			var FormattedNameDegree = HTMLschoolName.replace("%data%", educations.schools[school].name) + HTMLschoolDegree.replace("%data%", educations.schools[school].degree);
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(FormattedNameDegree)
									  .append(HTMLschoolDates.replace("%data%", educations.schools[school].date))
									  .append(HTMLschoolLocation.replace("%data%", educations.schools[school].location));
			for (index in educations.schools[school].majors)
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", educations.schools[school].majors[index]));
		}

		$("#education").append(HTMLonlineClasses);
		for (course in educations.onlineCourses){
			var formattedTitleSchool = HTMLonlineTitle.replace("%data%", educations.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", educations.onlineCourses[course].school);
			$("#education").append(HTMLonlineStart);
			$(".course-entry:last").append(formattedTitleSchool)
								   .append(HTMLonlineDates.replace("%data%", educations.onlineCourses[course].date))
								   .append(HTMLonlineURL.replace("%data%", educations.onlineCourses[course].url));
		}
	}
}


var work = {
	"jobs" : [
		{
			"employer" : "Bank",
			"title"   : "Ingenieur d'etat",
			"location" : "Rabat",
			"date"   : 2013,
			"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		},
		{
			"employer" : "Bank",
			"title"   : "Ingenieur d'etat",
			"location" : "Rabat",
			"date"   : 2013,
			"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
		}

	],
	display : function(){
		for (job in work.jobs) {
	      $("#workExperience").append(HTMLworkStart);
	      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	      var formattedWork =  formattedEmployer + formattedTitle;
	      var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].date);
	      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	      $(".work-entry:last").append(formattedWork)
	                           .append(formattedDate)
	                           .append(formattedLocation)
	                           .append(formattedDescription);
    }
	}
}


var bio = {
	"name" : "Mohamed Harbouj",
	"Role" :  "Web Developper",
	"skills" : ["full-stack", "awesomness", "javascript", "full-stack", "front-end"],
	"WelcomeMessage" : "Hello World !",
	"picture"	: "images/fry.jpg",
	"contacts" : {
		"mobile" : "0697941212",
		"email"  : "mohammed.elharbouj@gmail.com",
		"github" : "github",
		"twitter" : "medlogas",
		"location" : "sale"
	},

	display : function(){
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.Role))
            		.prepend(HTMLheaderName.replace("%data%", bio.name))
            		.append(HTMLbioPic.replace("%data%",bio.picture))
            		.append(HTMLwelcomeMsg.replace("%data%",bio.WelcomeMessage))
            		.append(HTMLskillsStart);

        for (contact in bio.contacts)
        	$("#topContacts").append(HTMLcontactGeneric.replace("%data%", bio.contacts[contact]).replace("%contact%", contact));


        for(skill in bio.skills) {
        	$("#skills").append(HTMLskills.replace("%data%",bio.skills[skill]));
        }
	}
}

var projects = {
	"projectSchool" : [
		{
			"title" : "Rendez-Vous",
			"date" : 2012,
			"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"images" : ["images/197x148.gif", "images/197x148.gif"]
		}
	]
	
}

projects.display = function () {

	for(project in projects.projectSchool) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projectSchool[project].title))
		                       .append(HTMLprojectDates.replace("%data%", projects.projectSchool[project].date))
		                       .append(HTMLprojectDescription.replace("%data%", projects.projectSchool[project].description));
		for(image in projects.projectSchool[project].images)
		    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projectSchool[project].images[image]));
	}
	
}

// Display Resume Section Methods :
projects.display();
work.display();
bio.display();
educations.display();


// Lesson 2 Javascript Basic Exercise :
function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}








//var awesomeThoughts = "I am Mohamed harbouj and i am awesome !";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("awesome", "FUN");
//$("#main").append(funThoughts);


/*
var formattedName = HTMLheaderName.replace("%data%", "Mohamed Harbouj")
	Role = HTMLheaderRole.replace("%data%", "Web Developper");

	$("#header").prepend(Role).prepend(formattedName);
	
var skills = ["JS", "awesome", "Developper"];
console.log(skills.length);

*/
/*

var bio = {
	"name" : "Mohamed Harbouj",
	"age"  :  22,
	"Role" :  "Web Developper",
	"picture" : "../images/fry.jpg",
	"message" : "Hello World !"
};

$("#main").append(bio.name).append(bio.age);
*/

/*
var work = {};
work.positon = "position not yet";
work.employer = "employer not yet";
work.year  = "year not yet";
work.city = "Rabat";

var education = {};

education["name"] = "Faculte Sciences Rabat";
education["year-school"] = 2013;
education["school-city"] = "rabat";

$("#main").append(work["position"]);
$("#main").append(education.name);
*/