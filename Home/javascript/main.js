/* ====== Back to Top Function ====== */

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

/* ====== Dropdown ====== */

// Get the dropdown button and content
var dropdownBtn = document.querySelector(".dropbtn");
var dropdownContent = document.querySelector(".dropdown-content");

// Add click event listener to the dropdown button
dropdownBtn.addEventListener("click", function () {
    // Toggle the dropdown content
    dropdownContent.classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.querySelectorAll(".dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
});
