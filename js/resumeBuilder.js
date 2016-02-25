//$("#main").append("John Lopez");

/*var awesomeThoughts = "I am John and I am awesome!"
var funThoughts = awesomeThoughts.replace("awesome", "fun");

console.log(awesomeThoughts);
console.log(funThoughts);
*/ 
var formattedName = "John Lopez"
var formattedRole = "Application Support"

HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);

$("#header").append(HTMLheaderName);
$("#header").append(HTMLheaderRole);

var mySkills = ["cool", "nice"]
var bio = 
{
	"name":formattedName,
	"role":formattedRole,
	"contact":"425.501.1608",
	"pic_url":"www.pic.com",
	"welcome_msg":"hi there",
	"skills":mySkills
};
if(bio.skills.length>0)
{
	$("#header").append(HTMLskillsStart);
	//while(j<bio.skills.length)
	for(item in bio.skills)
	{
		$("#header").append(HTMLskills.replace("%data%", bio.skills[item]));
	}

}

var mywork =[
{
	"start":"1999",
	"company":"ballard",
	"position":"Application Support",
	"dates":"1999-2016",
	"city":"Everett",
	"desc":"malarkey"
},
{
	"start":"1993",
	"company":"usa",
	"position":"grunt",
	"dates":"1993-1999",
	"city":"all over",
	"desc":"more malarkey"
}
];

var displayWork = function(work)
{
	for(job in work)
	{
		$("#workExperience").append(HTMLworkStart);

		var workstr="";	
		workstr += (HTMLworkStart.replace("%data%", work[job].start));
		workstr += (HTMLworkEmployer.replace("%data%", work[job].company));
		workstr += (", ");
		workstr += (HTMLworkTitle.replace("%data%", work[job].position));
		workstr += (HTMLworkDates.replace("%data%", work[job].dates));
		workstr += (HTMLworkLocation.replace("%data%", work[job].city));
		workstr += (HTMLworkDescription.replace("%data%", work[job].desc));

		$(".work-entry:last").append(workstr);

	}
}

displayWork(mywork);

$(document).click(function(loc){

	var x=event.clientX;
	var y=event.clientY;
	logClicks(x, y);
});

$("#main").append(internationalizeButton);

var inName = function(input)
{
	var names = input.split(" ");
	names[1] = names[1].toUpperCase(); 
	return names[0] + " " + names[1];
}
/*
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.pic_url);
$("#main").append(bio.welcome_msg);
$("#main").append(bio.skills);
*/
/*
{
	"thing": [{
		"key": "value",
		"key2": "value2"
	}, {
		"key": "value"
	}]
}
*/

//$("#main").append(work["position"]);
//console.log(work["position"]);

var edu = {};
edu["name"] = "self";
edu["time"] = "12";
edu["city"] = "Marysville";
$("#main").append(edu.name);

