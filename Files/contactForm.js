(function() {
    emailjs.init("V6dLDF69lLNEFCnwn");

    /*This line includes an external 
    JavaScript file from the specified source that 
    provides the EmailJS library.*/
})();

function submitForm(){ 
    /* This line declares a JavaScript 
    function named submitForm.*/
    // Retrieve the input field values
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;

    /*These lines retrieve the values entered in the input 
    fields with the corresponding IDs (nameInput, emailInput,
    and messageInput) and store them in variables named name,
     email, and message, respectively.*/

    // Send the email using EmailJS
        emailjs.send('service_dqivg2d', 'template_n93db4k', {
        name: name,
        email: email,
        message: message
        /*This line calls the send method of the emailjs 
        object to send an email using the EmailJS service.
        It takes three parameters: the service ID (service_dqivg2d),
        the template ID (template_n93db4k), and an object 
        containing the values to be substituted in the email 
        template. The object's properties name, email, and message 
        correspond to the retrieved input values.*/

    })
    .then(function(response) {
        /*This line begins a Promise chain with a then method 
        that handles the response from the send method. 
        It takes a function as a parameter, which will be 
        executed if the email sending is successful.*/
        alert('Email sent successfully.');
        /*This line displays an alert message indicating 
        that the email was sent successfully.*/
        // Reset the form
        document.getElementById('nameInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('messageInput').value = '';
        /*These lines reset the values of the input fields 
        by setting their value properties to an empty string, 
        effectively clearing the form.*/

    }, function(error) {
        alert('Failed to send email. Please try again later.');
        console.error('Error:', error);

        /*This part defines the rejection callback for the 
        Promise chain. If there is an error in sending the 
        email, an alert is displayed indicating the failure, 
        and an error message is logged to the console.*/
    });
}