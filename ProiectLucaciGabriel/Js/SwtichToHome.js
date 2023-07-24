function switchToHome() {
    var currentdate = new Date();
    var age = currentdate.getFullYear() - document.getElementById("yearinput").value;
    var m = currentdate.getMonth() - document.getElementById("monthinput").value+1;
    if (m < 0 || (m === 0 && currentdate.getDate() < document.getElementById("dayinput").value)) {
        age--;
    }
    if(age>=18)window.location.href="ViennaDistributionHomePage.html";
    else 
    {
        document.getElementById("alertbox").style.display= "block";
    }
}