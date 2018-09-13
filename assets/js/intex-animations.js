$(".my-gallery").swipeshow({
    autostart: false,    /* Set to `false` to keep it steady */
    initial: 1,          /* First slide's index */
    speed: 200,          /* Animation speed (ms) */
    friction: 0.2,         /* Bounce-back behavior; use `0` to disable */
    mouse: true,         /* enable mouse dragging controls */
    keys: true           /* enable left/right keyboard keys */
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
});

var burgerMenuOpen = document.getElementById('burger-menu');
var burgerMenuClose = document.getElementById('closebtn');

burgerMenuOpen.addEventListener("click", openNav);
burgerMenuClose.addEventListener("click", closeNav);

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("homebtn").style.opacity = "1";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("homebtn").style.opacity = "0";
    $(".hamburger").removeClass("is-active");
}

/*$(document).keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
        $('li[class = active]').trigger('click');
        return false;
    }
});*/
