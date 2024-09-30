// script.ts
document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleWorkExperience");
    var workExperience = document.getElementById("workExperience");
    toggleButton.addEventListener("click", function () {
        if (workExperience.style.display === "none") {
            workExperience.style.display = "block";
            toggleButton.innerText = "Hide Work Experience";
        }
        else {
            workExperience.style.display = "none";
            toggleButton.innerText = "Show Work Experience";
        }
    });
});
