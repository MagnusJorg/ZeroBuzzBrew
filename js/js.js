/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript from js/js.js running!')

document.querySelector('.burger-menu').addEventListener('click', function() {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});
