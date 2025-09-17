// credits to W3School for the tutorial on slideshow
let slideIndex = 1;
showSlides(slideIndex); //display the current slide

function plusSlides(n) {
    showSlides(slideIndex += n); //increase the slide number
    }

function currentSlide(n) { 
    showSlides(slideIndex = n); //displays the clicked dot slide
    }

function showSlides(n) { //display the slides
    let i;
    let slides = document.getElementsByClassName("mySlides"); 
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { //loops the slideshow
        slideIndex = 1 }
    if (n < 1) { 
        slideIndex = slides.length } //goes from the first slide to last slide
    for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //removes the active dot
    }
    slides[slideIndex-1].style.display = "block"; //highlights the dot
    dots[slideIndex-1].className += " active";
}