const contactForm = document.getElementById("contactForm");

// Get Course from URL

const params = new URLSearchParams(window.location.search);

const course = params.get("course");

if (course) {

    const courseField = document.getElementById("course");

    if (courseField) {

        courseField.value = course;

    }

}

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_4sk1lte",
            "template_ocxk3ll",
            this
        ).then(function () {

            alert("Message sent successfully!");

            contactForm.reset();

        }).catch(function (error) {

            alert("Failed to send message.");

            console.log(error);

        });

    });
}
