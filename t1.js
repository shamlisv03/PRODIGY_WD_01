document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 0) {
        header.style.background = "#333"; // Change background color on scroll
      } else {
        header.style.background = "linear-gradient(to right, #2196F3, #1E88E5)";
      }
    });
  });
  