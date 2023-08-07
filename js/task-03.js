const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryElement = document.querySelector(".gallery");

const galleryMarkup = images
  .map(
    (image) =>
      `<li class="gallery-item"><img src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

galleryElement.insertAdjacentHTML("beforeend", galleryMarkup);

const cssStyles = `
  .gallery {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .gallery-item {
    margin-right: 10px;
  }

  .gallery-item:last-child {
    margin-right: 0;
  }

  .gallery-item img {
    width: 400px; /* Встановіть бажаний розмір зображення */
    height: auto;
    object-fit: cover;
  }
`;

const styleElement = document.createElement("style");
styleElement.innerHTML = cssStyles;

document.head.appendChild(styleElement);
