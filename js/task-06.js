const inputEl = document.querySelector("input");
const lengthEl = inputEl.getAttribute("data-length");

const onInputBlur = (event) =>
  event.target.value.length === Number.parseInt(lengthEl)
    ? (inputEl.className = "valid")
    : (inputEl.className = "invalid");
inputEl.addEventListener("blur", onInputBlur);
