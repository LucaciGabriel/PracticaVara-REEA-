function switchToHome() {
    if((document.getElementById("dayinput").value==='' || document.getElementById("dayinput").value===0||(document.getElementById("dayinput").value>31)) ||
       (document.getElementById("monthinput").value==='' || document.getElementById("monthinput").value===0||(document.getElementById("monthinput").value>12)) ||
       (document.getElementById("yearinput").value==='' || document.getElementById("yearinput").value<1920||(document.getElementById("dayinput").value>2023)))
       document.getElementById("alertbox").style.display= "block";
    else
    {
        var currentdate = new Date();
        var age = currentdate.getFullYear() - document.getElementById("yearinput").value;
        var m = currentdate.getMonth() - document.getElementById("monthinput").value + 1;
        if (m < 0 || (m === 0 && currentdate.getDate() < document.getElementById("dayinput").value)) {
            age--;
        }
        if(age>=18)window.location.href="ViennaDistributionHomePage.html";
        else 
        {
            document.getElementById("alertbox").style.display= "block";
        }
    }
}