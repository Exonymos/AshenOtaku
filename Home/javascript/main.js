// Define a function to check if the page is scrolled and show/hide the back-to-top button accordingly
function scrollFunction() {
    if (window.pageYOffset > 0) {
        // If the page is scrolled, display the back-to-top button
        document.getElementById("btnTop").style.display = "block";
    } else {
        // If the page is at the top, hide the back-to-top button
        document.getElementById("btnTop").style.display = "none";
    }
}

// Attach the scrollFunction() function to the 'scroll' event of the window object
window.addEventListener('scroll', scrollFunction);

// Define a function to scroll the page to the top when the back-to-top button is clicked
function topFunction() {
    // Scroll to the top of the document with a smooth animation
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Attach the topFunction() function to the click event of the back-to-top button
document.getElementById("btnTop").addEventListener("click", topFunction);
