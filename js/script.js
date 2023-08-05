let next = document.querySelector(".btn-next");
let prev = document.querySelector(".btn-prev");

let imgs = document.querySelectorAll("img");
let i = 0;

console.log(imgs);

next.addEventListener("click", () => {
    imgs[i].classList.remove("active");
    if (i == imgs.length - 1) {
        i = -1;
    }
    i++;
    imgs[i].classList.add("active");
});


prev.addEventListener("click", () => {
    imgs[i].classList.remove("active");
    --i;
    if (i <= 0) {
        i = imgs.length - 1;
    }
    imgs[i].classList.add("active");
});

function slider(){
    imgs[i].classList.remove("active");
    if (i == imgs.length - 1) {
        i = -1;
    }
    i++;
    imgs[i].classList.add("active");
}


setInterval(slider, 2000);