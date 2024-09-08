document.getElementById('r-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const proPicInput = document.getElementById('pro-pic') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const contactElement = document.getElementById('contact') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if (proPicInput && nameElement && emailElement && contactElement && experienceElement && educationElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const contact = contactElement.value;
        const experience = experienceElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;

        // Get profile picture URL
        const proPicFile = proPicInput.files?.[0];
        const proPicUrl = proPicFile ? URL.createObjectURL(proPicFile) : "";

        // Create resume output
        const resume = `<h3>Resume</h3>
        ${proPicUrl ? `<img src="${proPicUrl}" alt="Profile Image" class="pro-pic">` : ''}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <h3>Experience:</h3> <p>${experience}</p>
        <h3>Education:</h3> <p>${education}</p>
        <h3>Skills:</h3> <p>${skills}</p>`;

        const resumeElement = document.getElementById('resume');
        if (resumeElement) {
            resumeElement.innerHTML = resume;
        } else {
            console.error('The Resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});
