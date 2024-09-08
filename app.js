(_a = document.getElementById('r-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var proPicInput = document.getElementById('pro-pic');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var experienceElement = document.getElementById('experience');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    if (proPicInput && nameElement && emailElement && contactElement && experienceElement && educationElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var experience = experienceElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        // Get profile picture URL
        var proPicFile = (_a = proPicInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var proPicUrl = proPicFile ? URL.createObjectURL(proPicFile) : "";
        // Create resume output
        var resume = "<h3>Resume</h3>\n        ".concat(proPicUrl ? "<img src=\"".concat(proPicUrl, "\" alt=\"Profile Image\" class=\"pro-pic\">") : '', "\n        <p><strong>Name:</strong> ").concat(name_1, "</p>\n        <p><strong>Email Address:</strong> ").concat(email, "</p>\n        <p><strong>Contact:</strong> ").concat(contact, "</p>\n        <h3>Experience:</h3> <p>").concat(experience, "</p>\n        <h3>Education:</h3> <p>").concat(education, "</p>\n        <h3>Skills:</h3> <p>").concat(skills, "</p>");
        var resumeElement = document.getElementById('resume');
        if (resumeElement) {
            resumeElement.innerHTML = resume;
        }
        else {
            console.error('The Resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
