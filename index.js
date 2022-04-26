const showWebsite = () => {
    console.log("click clickedy click");
    const hiddenContents = document.querySelectorAll(".hidden");
    for (const hiddenContent of hiddenContents) {
        hiddenContent.classList.toggle("visible");
    }

    const section = document.querySelector(".container");
    section.style.display = "none";
};

const button = document
    .querySelector("#show-website")
    .addEventListener("click", showWebsite);
