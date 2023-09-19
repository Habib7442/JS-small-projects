const review_stars = document.querySelector(".review_stars");
const review_card = document.querySelector(".review_card");

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".close");
const readMore = document.querySelector(".button");

let fullStarComponent = `<i class="fa-solid fa-star"></i>`;
let emptyStarComponent = `<i class="fa-regular fa-star"></i>`;

for (let i = 0; i < 5; i++) {
  review_stars.innerHTML += emptyStarComponent;
}

const star_icons = review_stars.querySelectorAll("i");

star_icons.forEach((star, index) => {
  star.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = 0; i < star_icons.length; i++) {
      if (i <= index) {
        star_icons[i].classList.remove("fa-regular");
        star_icons[i].classList.add("fa-solid");
      } else {
        star_icons[i].classList.remove("fa-solid");
        star_icons[i].classList.add("fa-regular");
      }
    }
  });
});

const openModal = () => {
  modal.classList.add("active");
};

const closeModal = () => {
  modal.classList.remove("active");
};

readMore.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
