document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    let isValid = true;

   
    if (firstName.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text: 'يجب إدخال الاسم الأول'
        });
        isValid = false;
    }

    if (lastName.trim() === '') {
        Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text: 'يجب إدخال الاسم الأخير'
        });
        isValid = false;
    }

    if (!validateEmail(email)) {
        Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text: 'البريد الإلكتروني غير صحيح'
        });
        isValid = false;
    }

    if (password.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text: 'كلمة المرور يجب أن تكون 6 أحرف على الأقل'
        });
        isValid = false;
    }

    if (password !== confirmPassword) {
        Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text: 'كلمة المرور غير متطابقة'
        });
        isValid = false;
    }

    if (!terms) {
        Swal.fire({
            icon: 'error',
            title: 'خطأ',
            text: 'يجب الموافقة على الشروط والأحكام'
        });
        isValid = false;
    }

    if (isValid) {
        const userData = {
            firstName,
            lastName,
            email,
            password
        };
      
        localStorage.setItem('userData', JSON.stringify(userData));

        Swal.fire({
            title: 'تم التسجيل بنجاح!',
            icon: 'success',
            confirmButtonText: 'موافق'
        }).then((result) => {
            if (result.isConfirmed) {
          
                window.location.href = "login.html";  
            }
        });
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function showTermsModal() {
    document.getElementById('termsModal').style.display = 'block';
}

function closeTermsModal() {
    document.getElementById('termsModal').style.display = 'none';
}