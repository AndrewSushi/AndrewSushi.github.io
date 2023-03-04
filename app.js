function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        var scrollTop = section.offsetTop - 125;
        window.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
    }
}
  
var navLinks = document.querySelectorAll('nav a');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        var sectionId = this.getAttribute('href').replace('#', '');
        scrollToSection(sectionId);
    });
}
  
const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
