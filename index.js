const showWebsite = () => {
    console.log("click clickedy click");
    const hiddenContents = document.querySelectorAll(".hidden");
    for (const hiddenContent of hiddenContents) {
        hiddenContent.classList.add("visible");
    }

    const section = document.querySelector("#startcontainer");
    section.style.display = "none";
};

const button = document
    .querySelector("#show-website")
    .addEventListener("click", showWebsite);

// Add/remove active class for each button on click
const skillsNavBar = document.querySelector("#skills-navbar");
const buttons = skillsNavBar.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const selected = document.querySelector(".active");
        selected.classList.remove("active");
        button.classList.add("active");
    });
});
