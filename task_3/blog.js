document.addEventListener("DOMContentLoaded", function () {
    
    var aboutLink = document.querySelector("nav ul li a[href='#About']");
    var contactLink = document.querySelector("nav ul li a[href='#Contact']");
    
    
    var aboutSection = document.getElementById("aboutSection");
    var contactSection = document.getElementById("contactSection");

    aboutSection.style.display = "none";
    contactSection.style.display = "none";

    
    aboutLink.addEventListener("click", function (event) {
        event.preventDefault();

        if (aboutSection.style.display === "none") {
            aboutSection.style.display = "block";
            contactSection.style.display = "none"; 
        } else {
            aboutSection.style.display = "none";
        }
    });

    
    contactLink.addEventListener("click", function (event) {
        event.preventDefault();

        if (contactSection.style.display === "none") {
            contactSection.style.display = "block";
            aboutSection.style.display = "none"; 
        } else {
            contactSection.style.display = "none";
        }
    });
});
