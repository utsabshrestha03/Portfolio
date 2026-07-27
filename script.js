// Initialize the slide index
let slideIndex = 1;

// Display the first slide when the page loads
window.onload = function() {
    showSlides(slideIndex);
};

// Function to handle Next/Previous arrow controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to handle Indicator Dot controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Main function to control which slide is shown
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    // Safety check: if there are no slides, exit the function
    if (slides.length === 0) return;
    
    // Loop back to the first slide if we go past the last one
    if (n > slides.length) {
        slideIndex = 1;
    }    
    
    // Loop to the last slide if we go backwards past the first one
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    // Hide all slides by default
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Remove the "active" class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show the current slide and add the "active" class to the corresponding dot
    // Note: Arrays are 0-indexed, so we subtract 1 from slideIndex
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
}