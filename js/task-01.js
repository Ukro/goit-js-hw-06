 // Отримуємо елемент списку категорій за його ідентифікатором
    const categoriesList = document.getElementById('categories');

    // Отримуємо всі елементи li з класом 'item' у списку категорій
    const categoryItems = categoriesList.querySelectorAll('li.item');
    // Виводимо кількість категорій
    console.log(`Number of categories: ${categoryItems.length}`);

    // Ітеруємося по кожному елементі li з класом 'item'
    categoryItems.forEach((category) => {
      // Отримуємо заголовок категорії (елемент <h2>)
      const categoryName = category.querySelector('h2').textContent;

      // Отримуємо всі елементи li, що належать даній категорії
      const categoryElements = category.querySelectorAll('li');

      // Виводимо інформацію про категорію та кількість елементів в ній
      console.log(`Category: ${categoryName}`);
      console.log(`Elements: ${categoryElements.length}`);
    });