// script.ts
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleWorkExperience") as HTMLButtonElement;
  const workExperience = document.getElementById("workExperience") as HTMLDivElement;

  toggleButton.addEventListener("click", () => {
      if (workExperience.style.display === "none") {
          workExperience.style.display = "block";
          toggleButton.innerText = "Hide Work Experience";
      } else {
          workExperience.style.display = "none";
          toggleButton.innerText = "Show Work Experience";
      }
  });
});
