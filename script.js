$(document).ready(function () {
    $(window).scroll(function () {
        $('.navbar').toggleClass("navigating", ($(window).scrollTop() > 0));
        $('aside').toggleClass("navigating", ($(window).scrollTop() > 0));
    });
});

document.getElementById('btn').onclick = function () {
    document.querySelector('aside').classList.toggle('openbar');
}

const ts = document.querySelector(".toggleSec")
let items = document.querySelectorAll(".sectionsList > li")
items.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.id == 'home') {
            ts.style.top = '0px'
        }

        if (e.target.id == 'products') {
            ts.style.top = '64px'
        }

        if (e.target.id == 'new') {
            ts.style.top = '128px'
        }

        document.querySelector('aside').classList.toggle('openbar');
    })
});
