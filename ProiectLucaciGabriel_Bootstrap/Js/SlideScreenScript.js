let slideIndex = 1;
ShowSlide(slideIndex);

function MoveSlide(n) {
  ShowSlide(slideIndex += n);
}

function GoToSlide(n) {
  ShowSlide(slideIndex = n);
}

function ShowSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let lines = document.getElementsByClassName("slide-line");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < lines.length; i++) {
    lines[i].className = lines[i].className.replace(" current-slide", "");
  }  
  lines[slideIndex-1].className += " current-slide";
  slides[slideIndex-1].style.display = "block";  
}