
function sendMail(contactForm) {
    emailjs.send('service_596drid', 'rosie', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "project_request": contactForm.projectSummary.value
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
        console.log('FAILED...', error);
    });
    return false;  // To block from loading a new page

}
