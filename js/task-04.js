// Знаходимо необхідні елементи
const counterValueElement = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

// Ініціалізуємо змінну counterValue значенням 0
let counterValue = 0;

// Функція для оновлення значення лічильника та інтерфейсу
function updateCounterValue() {
  counterValueElement.textContent = counterValue;
}

// Функція для збільшення значення лічильника на 1
function incrementCounter() {
  counterValue++;
  updateCounterValue();
}

// Функція для зменшення значення лічильника на 1
function decrementCounter() {
  counterValue--;
  updateCounterValue();
}

// Додаємо слухачів кліків до кнопок
decrementButton.addEventListener('click', decrementCounter);
incrementButton.addEventListener('click', incrementCounter);

// Оновлюємо інтерфейс з початковим значенням
updateCounterValue();
