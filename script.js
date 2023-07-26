const toggleOpen = document.getElementById('openMenu');
const Closebtn = document.getElementById('closeMenu')
const Menuwindow = document.querySelector('.menu_window');
const Overlay = document.getElementById('overlay')


window.onscroll = function () {
    var header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active')
    }
}

toggleOpen.addEventListener("click", function () {
    Menuwindow.classList.add('active');
    Overlay.classList.add('active');
})

Closebtn.addEventListener("click", function () {
    Menuwindow.classList.remove('active')
    Overlay.classList.remove('active')
})



// Flickity script

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    contain: true,
    draggable: false,
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    autoPlay: true,
    selectedAttraction: 0.01,
    friction: 0.40,
    groupCells: 2,
    pauseAutoPlayOnHover: false
});


var flkty = new Flickity('.main-carousel', {
    // options
});