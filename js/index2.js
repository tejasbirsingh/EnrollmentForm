// function validateEmail(mail) 
// {
//  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
//   {
//     return (true)
//   }
//     alert("You have entered an invalid email address!")
//     return (false)
// }

function enroll() {

	var pname = document.getElementById("pname").value;

	// Email validation
	var email2 = document.getElementById("email").value;
	// var email2;
	// if(validateEmail(email)){
	// 	email2 = email;
	// }
	// else{
	// 	document.getElementById("email").focus();
	// 	return;
	// }

	var site = document.getElementById("site").value;
	var site2;
	if (site.substring(0, 4) == "http") {
		site2 = site;
	} else if (site.substring(0, 2) == "//") {
		site2 = "https:" + site;
	} else if (site.substring(0, 2) != "//" && site.substring(0, 1) == "/") {
		site2 = "https:/" + site;
	} else {
		site2 = "https://" + site;
	}


	var link2 = document.getElementById("link").value;


	var gender = "";
	if (document.getElementById("r1").checked) {
		gender = document.getElementById("r1").value;
	} else if (document.getElementById("r2").checked) {
		gender = document.getElementById("r2").value;
	}


	var skills = [];
	if (document.getElementById("c1").checked) {
		skills.push(document.getElementById("c1").value);
	}
	if (document.getElementById("c2").checked) {
		skills.push(document.getElementById("c2").value);
	}
	if (document.getElementById("c3").checked) {
		skills.push(document.getElementById("c3").value);
	}


	if (
		pname == "" ||
		email == "" ||
		site == "" ||
		link == "" ||
		gender == "" ||
		skills == ""
	) {
		alert("Please fill every field!");
	} else {

		if (
			site.substring(0) == "https" ||
			site.substring(0) == "http" ||
			site.substring(0) == "//" ||
			site.substring(0) == "/" ||
			site.substring(0) == "www"

		) {
			alert("Enter Proper Links!");
		}
		else {
			enterDataToTable(pname, gender, email2, site2, site, skills, link2);
		}
	}
}

function enterDataToTable(pname, gender, email2, site2, site, skills, link2){
	var table = document.getElementById("myTable");
			var rowCount = table.rows.length;
			var row = table.insertRow(rowCount);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			cell1.innerHTML =
				"<strong>" +
				pname +
				"</strong><br>" +
				gender +
				"<br>" +
				email2 +
				"<br>" +
				"<a href='" +
				site2 +
				"' target='_blank' ' rel='noopener noreferrer'>" +
				site +
				"</a><br>" +
				skills;
			cell2.innerHTML = "<img height='100' src='" + link2 + "'>";
			clearfields();
}

function clearfields() {
	document.getElementById("pname").value = "";
	document.getElementById("email").value = "";
	document.getElementById("site").value = "";
	document.getElementById("link").value = "";
	document.getElementById("r1").checked = false;
	document.getElementById("r2").checked = false;
	document.getElementById("c1").checked = false;
	document.getElementById("c2").checked = false;
	document.getElementById("c3").checked = false;
}
