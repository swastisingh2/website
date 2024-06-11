let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-slide");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
var controller = new ScrollMagic.Controller();

document.querySelectorAll('.timeline-block').forEach(function(block) {
    new ScrollMagic.Scene({
        triggerElement: block,
        triggerHook: 0.9, // Trigger the animation when the block comes into view
        reverse: false // Only trigger once
    })
    .setClassToggle(block, 'visible') // Add 'visible' class when in view
    .addTo(controller);
});

function typeEffect(element, text, speed) {
    let i = 0;
    element.innerHTML = "";  // Clear existing text
    element.style.opacity = 1;
    element.style.visibility = 'visible'; // Make sure the element is visible

    const typing = setInterval(function() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
            setTimeout(() => {
                element.style.opacity = 0; // Fade out text
                element.style.visibility = 'hidden'; // Hide the text
                setTimeout(() => {
                    typeEffect(element, text, speed); // Restart typing effect
                }, 1000); // Delay before typing starts again
            }, 2000); // Text visible for 2 seconds
        }
    }, speed);
}

// Text to type and element reference
const heading = document.getElementById('animated-heading');
const text = "Hi! I'm Swasti Singh";

// Start the typing effect
typeEffect(heading, text, 150); // Adjust speed as needed



