function menuShow(src) {
    const nav = document.querySelector('.nav_list')
    nav.classList.toggle ('open')

    const menuIcon = document.querySelector('#menu_icon')

    var srcMenu = menuIcon.getAttribute('src')

    if (srcMenu == 'assets/images/menu.svg') {
        menuIcon.setAttribute('src', 'assets/images/close.svg')
    } else {
        menuIcon.setAttribute('src', 'assets/images/menu.svg')
    }
}