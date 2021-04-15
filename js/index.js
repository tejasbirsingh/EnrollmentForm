// main function for extracting the data from form fields

function validateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }

    return (false)
}

function enrollStudent() {

    var formData = new FormData(studentForm);
    var studentName = formData.get("pname");
    var studentEmail = formData.get("email");
    if (validateEmail(studentEmail) == false) {
        alert("Please enter correct email!");
        document.getElementById("email").focus();
        return false;
    }
    var websiteLink = formData.get("site");
    var imageLink = formData.get("link");


    var studentGender = "";

    // get the selected value for gender
    if (document.getElementById("r1").checked) {
        studentGender = document.getElementById("r1").value;
    } else if (document.getElementById("r2").checked) {
        studentGender = document.getElementById("r2").value;
    } else {
        alert("Please select your gender !");
        document.getElementById("r1").focus();
        return false; // false is returned so submit fields are not reset
    }

    var studentSkills = [];
    // get the skills selected by the student
    var checkboxes = document.getElementsByName('skills');
    for (var checkbox of checkboxes) {
        if (checkbox.checked)
            studentSkills.push(checkbox.value);
    }

    // validation for the skills 
    if (studentSkills.length == 0) { // if skills list is empty 
        alert("Please select atleast 1 skill !")
        document.getElementById('c1').focus();
        return false; // false is returned so submit fields are not reset
    }

    // this function call will add new data to the table
    enterDataToTable(studentName, studentEmail, websiteLink, imageLink, studentGender, studentSkills);

}

// this function will add the extracted data to the table
function enterDataToTable(pname, email, site, link, gender, skills) {

    var table = document.getElementById("enrolledTable");
    var rowCount = table.rows.length; // it will return the count of rows + 1 
    var row = table.insertRow(rowCount);
    var detailsCell = row.insertCell(0);
    var profilePictureCell = row.insertCell(1);
    //  cell 1 is the column 1 which will show the details of the enrolled student
    detailsCell.innerHTML =
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
    profilePictureCell.innerHTML = "<img height='100' alt='Student Photo' src='" + link + "'>";
    clearAllFields();
}

// this function will clear all the fields after form is submitted
function clearAllFields() {
    // var formData = new FormData(studentForm);
    // formData.clearAllFields();
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
