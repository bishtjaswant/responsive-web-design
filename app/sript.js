let tab__contents=  document.querySelectorAll('.tab__contents');
let tab__links= document.querySelectorAll('.tab__link');

let toggle_nav = document.getElementById("toggle_nav");
let toggle_nav_close = document.getElementById("toggle_nav_close")

function openTab(input) {


    for (const tab__content of tab__contents) {
          tab__content.classList.remove('tab__content-active');
    }

    for (const tab__link of tab__links) {
        tab__link.classList.remove('tab__link--active');
    }
    event.currentTarget.classList.add('tab__link--active');
    document.getElementById(input).classList.add('tab__content-active')
}

toggle_nav.addEventListener('click', function (e) {
    document.getElementsByTagName('nav')[0].classList.add('toggle_nav');
    
});

toggle_nav_close.addEventListener('click', function (e) {
    document.getElementsByTagName('nav')[0].classList.remove('toggle_nav');
});


// if user scroll down the document  then hide nav bar 
function updateScroll  ( ) {
    if(window.scrollY > 100){
        document.getElementsByTagName('nav')[0].classList.remove('toggle_nav');

        console.log('ok')
    }
}
window.onscroll= updateScroll;



// typed library

var typed = new Typed('#typed', {
    strings :['web developer','android developer', 'UI/UX designer','trader'],
    typeSpeed:14,
    loop: true,
    loopCount: Infinity,
    showCursor: false,
  
  });

