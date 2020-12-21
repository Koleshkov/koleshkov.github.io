function collapseMenu() {
    let menu = document.getElementById('menu');
    if (menu.className.includes('collapsed', 0)) {
        document.getElementById('menu').className = 'menu';
    }
    else {
        document.getElementById('menu').className = 'menu collapsed';
    }

}