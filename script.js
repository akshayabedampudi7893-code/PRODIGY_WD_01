javascript
// Get the navigation bar
const navbar = document.getElementById("navbar");


// Detect scrolling
window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        // Change navbar style
        navbar.classList.add("scrolled");

    } else {

        // Return to original style
        navbar.classList.remove("scrolled");

    }

});

