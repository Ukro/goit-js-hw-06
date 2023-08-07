// Знаходимо необхідні елементи
const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

// Функція для оновлення вмісту спану залежно від вмісту інпуту
function updateNameOutput() {
  const name = nameInput.value.trim(); // Видаляємо зайві пробіли з початку і кінця

  if (name === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = name;
  }
}

// Додаємо слухача події input до інпуту
nameInput.addEventListener('input', updateNameOutput);


