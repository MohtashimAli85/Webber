let nav = document.querySelector('nav'),
    expanded = nav.getAttribute('aria-expanded'),
    mobile_nav = document.querySelector('.mobile-nav-links'),
    menuIcon = document.querySelector('.hotdog-icon'),
    body = document.querySelector('body');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('show');
    mobile_nav.classList.toggle('show');
    body.classList.toggle('nomove');

});
window.addEventListener('resize', resizeChecker);
window.addEventListener('DOMContentLoaded', resizeChecker);
function resizeChecker() {
    let width = document.body.clientWidth;
    if (width > 768) {
        nav.setAttribute('aria-expanded', true);
        menuIcon.classList.remove('show');
        menuIcon.classList.add('hide');
    }
    if (width < 768) {
        if (menuIcon.classList.contains('hide')) {
            menuIcon.classList.remove('hide');
        }
        nav.setAttribute('aria-expanded', false);
    }
}
