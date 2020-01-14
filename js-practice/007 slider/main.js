var parent = document.querySelector(".slider");
var slides = parent.querySelectorAll(".item");
var current = 0;
var lastIndex = slides.length - 1;

function boot() {

}

function loop() {
    ++current;
    if (current >= slides.length)
        current = 0;
    console.log(current);
    var prev;
    if (current - 1 >= 0) {
        prev = slides[current - 1];
    } else {
        prev = slides[lastIndex];
    }
    var next = slides[current];
    hide(prev);
    show(next);

}

console.log(slides);

setInterval(() => {
    loop();
}, 3000)

function hide(el) {
    if (el) {
        el.style.opacity = 0;
        el.style.zIndex = 0;
    } else {
        return;
    }

}

function show(el) {

    el.style.opacity = 1;
    el.style.zIndex = 1;
}