const showWebsite = () => {
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

const skillsNavBar = document.querySelector("#skills-navbar");
const buttons = skillsNavBar.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Add/remove active class for each button on click
        const selected = document.querySelector(".active");
        selected.classList.remove("active");
        button.classList.add("active");

        // show certain display depending on which button active
        const allSkills = document.querySelectorAll(".skills");

        switch (button.id) {
            case "front-end":
                console.log(1);
                allSkills[0].classList.add("display");
                allSkills[1].classList.add("no-display");
                allSkills[2].classList.add("no-display");
                allSkills[3].classList.add("no-display");
                break;
            case "back-end":
                console.log(2);
                allSkills[0].classList.remove("display");
                allSkills[0].classList.add("no-display");
                allSkills[1].classList.remove("no-display");
                allSkills[2].classList.add("no-display");
                allSkills[3].classList.add("no-display");
                break;
            case "tools":
                console.log(3);
                allSkills[0].classList.remove("display");
                allSkills[0].classList.add("no-display");
                allSkills[1].classList.add("no-display");
                allSkills[2].classList.remove("no-display");
                allSkills[3].classList.add("no-display");
                break;
            case "soft":
                console.log(4);
                allSkills[0].classList.remove("display");
                allSkills[0].classList.add("no-display");
                allSkills[1].classList.add("no-display");
                allSkills[2].classList.add("no-display");
                allSkills[3].classList.remove("no-display");
                break;
        }
    });
});
