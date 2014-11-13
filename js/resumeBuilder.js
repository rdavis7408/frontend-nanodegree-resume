
var name = "Robert L. Davis";	
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Senior Business Analyst";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




