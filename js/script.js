/* Typing Animation */
var typed = new Typed(".typing", {
    strings: ["Crypto Enthusiast", "Computer Engineering Student", "Web Developer", ""],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

/* Navigation and Section Toggling */
const navList = document.querySelectorAll(".nav li"),
      totalNavItems = navList.length,
      allSections = document.querySelectorAll(".section"),
      totalSections = allSections.length;

for (let i = 0; i < totalNavItems; i++) {
    const navLink = navList[i].querySelector("a");
    navLink.addEventListener("click", function(event) {
        event.preventDefault();
        
        const targetId = this.getAttribute("href").substring(1);
        
        for (let j = 0; j < totalSections; j++) {
            allSections[j].classList.remove("active");
        }
        
        document.getElementById(targetId).classList.add("active");

        // Close the aside on small screens
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSections; i++) {
        allSections[i].classList.toggle("open");
    }
}
