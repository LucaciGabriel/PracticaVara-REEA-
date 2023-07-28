window.onscroll = function () { 
    if ((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) || window.innerWidth<550) {
        navbar.className ="nav-solid";
        navbarlogo.src="Img/Viennalogo2.png";
    } 
    else {
        navbar.className ="nav-transparent";
        navbarlogo.src="Img/Viennalogo1.png";
    }
};
window.onresize = function() {
    if ((document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) || window.innerWidth<550) {
        navbar.className ="nav-solid";
        navbarlogo.src="Img/Viennalogo2.png";
    } 
    else {
        navbar.className ="nav-transparent";
        navbarlogo.src="Img/Viennalogo1.png";
    }
}