const inputElement = document.getElementById('validation-input');

  inputElement.addEventListener('blur', () => {
    const desiredLength = inputElement.getAttribute('data-length');
    const inputValue = inputElement.value;
    
    if (inputValue.length === parseInt(desiredLength)) {
      inputElement.classList.add('valid');
      inputElement.classList.remove('invalid');
    } else {
      inputElement.classList.add('invalid');
      inputElement.classList.remove('valid');
    }
  });