document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const formData = {
        name: name,
        email: email,
        message: message
    };

    localStorage.setItem("contactFormData", JSON.stringify(formData));


    Swal.fire({
        icon: 'success',
        title: 'تم حفظ بياناتك بنجاح!',
        confirmButtonText: 'موافق'
    });

   
    document.getElementById("contact-form").reset();
});
