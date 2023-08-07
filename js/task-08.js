const loginForm = document.querySelector('.login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо перезавантаження сторінки

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
      alert('Всі поля повинні бути заповнені');
      return;
    }

    const formData = {
      email: emailInput.value,
      password: passwordInput.value
    };

    console.log(formData);

    loginForm.reset(); // Очищаємо поля форми
  });

