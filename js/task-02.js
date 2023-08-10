const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((ingredient) => {
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  return listEl;
});

ingredientsEl.append(...elements);
