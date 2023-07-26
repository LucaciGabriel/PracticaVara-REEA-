window.onscroll = function () { 
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ) {
        navbar.className ="nav-solid";
        navbarlogo.className ="nav-solid";
    } 
    else {
        navbar.className ="nav-transparent";
        navbarlogo.className ="nav-transparent";
    }
};