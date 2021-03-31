function enrollStudent() {

    var pname = document.getElementById("pname").value;
    var email = document.getElementById("email").value;
    var site = document.getElementById("site").value;
    var link = document.getElementById("link").value;
    var gender = "";

    // get the selected value for gender
    if (document.getElementById("r1").checked) {
        gender = document.getElementById("r1").value;
    } else if (document.getElementById("r2").checked) {
        gender = document.getElementById("r2").value;
    } else {
        alert("Please select your gender !");
        document.getElementById("r1").focus();
        return false;
    }

    var skills = [];
    // get the skills selected by the student
    var checkboxes = document.getElementsByName('skills');
    for (var checkbox of checkboxes) {
        if (checkbox.checked)
            skills.push(checkbox.value);
    }

    // validation for the skills 
    if (skills.length == 0) {
        alert("Please select atleast 1 skill !")
        document.getElementById('c1').focus();
        return false;
    }

    enterDataToTable(pname, email, site, link, gender, skills);

}

function enterDataToTable(pname, email, site, link, gender, skills) {

    var table = document.getElementById("enrolledTable");
    var rowCount = table.rows.length; // it will return the count of rows + 1 
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    //  cell 1 is the column 1 which will show the details of the enrolled student
    cell1.innerHTML =
        "<strong>" +
        pname +
        "</strong><br>" +
        gender +
        "<br>" +
        email +
        "<br>" +
        "<a href='" +
        site +
        "' target='_blank' ' rel='noopener noreferrer'>" +
        site +
        "</a><br>" +
        skills;
    // cell2 is column 2 which will show the profile photo of the student
    cell2.innerHTML = "<img height='100' alt='Student Photo' src='" + link + "'>";
    clearAllFields();
}

function clearAllFields() {
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