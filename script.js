/*
Scripts for Final
*/
function hamburger() {
    var menu = document.getElementById ("menu-links") ;
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

window.onload = function() {
    setTimeout(showPopup, 3000); // Show popup after 3 seconds
};

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}