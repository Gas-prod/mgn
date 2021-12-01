const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const content = document.querySelector(".content");

var array = window.location.href.split("#");
var startPart = array[array.length - 1];

function openMenu(){
    menu.classList.remove("close")
    menu.classList.add("open");
    menuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    menuButton.setAttribute("onclick", "closeMenu()");
}

function closeMenu(){
    menu.classList.add("close");
    menuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
    menuButton.setAttribute("onclick", "openMenu()");

    setTimeout(function(){
        menu.classList.remove("open");
        menu.classList.remove("close");
    }, 340)
}

if(window.innerWidth <= 800) {
	var startX = 0;
	var distance = 100;

	content.addEventListener("touchstart", function(e){
		var touches = e.changedTouches[0];
		startX = touches.pageX;
		between = 0;
	}, false);

	content.addEventListener("touchend", function(e){
		var touches = e.changedTouches[0];
		var between = touches.pageX - startX;

		if(between < -50) {
			openMenu();
		}
	}, false);
}

function goTo(part){
    if(window.innerWidth <= 800){
        var targeted = document.querySelector(".mobile-header .target");
        var newTarget = document.querySelector(`#${part}-mobile-link`);
    }
    else
    {
        var targeted = document.querySelector(".header .target");
        var newTarget = document.querySelector(`#${part}-link`);
    }

    if(targeted){
        targeted.classList.remove("target");
    }

    newTarget.classList.add("target");

    closeMenu()
}

window.addEventListener("load", function(){
    goTo(startPart);
})