let review_stars = document.querySelector(".review_stars");

let fullStarComponent = `<i class="fa-solid fa-star"></i>`;
let emptyStarComponent = `<i class="fa-regular fa-star"></i>`;

for (let i = 0; i < 5; i++) {
  review_stars.innerHTML += emptyStarComponent;
}

const star_icons = review_stars.querySelectorAll("i");

star_icons.forEach((star, index) => {
    star.addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0; i < star_icons.length; i++) {
            if (i <= index) {
                star_icons[i].classList.remove("fa-regular");
                star_icons[i].classList.add("fa-solid");
            } 
            else {
                star_icons[i].classList.remove("fa-solid");
                star_icons[i].classList.add("fa-regular");
            }
        }
        
    })
})