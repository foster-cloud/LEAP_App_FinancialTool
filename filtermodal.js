// Search Filter User Action
// Get the input element
const inputField = document.querySelector(
  '.input-container-search input[type="text"]'
);

// Add event listeners to change placeholder on focus and reset on blur
inputField.addEventListener("focus", function () {
  this.placeholder = "Type here";
  this.previousElementSibling.style.opacity = "1"; // Hide SVG
});

inputField.addEventListener("blur", function () {
  this.placeholder = "Filter Search"; // Revert placeholder text on blur
  this.previousElementSibling.style.opacity = "1"; // Show SVG
});

// Dropdown toggle and selection logic
document.querySelectorAll(".input-wrapper").forEach((wrapper) => {
  const inputField = wrapper.querySelector('input[type="text"]');
  const dropdownMenu = wrapper.nextElementSibling;
  const resetButton = document.getElementById("reset-button");

  wrapper.addEventListener("click", function () {
    inputField.focus();
    dropdownMenu.style.display = "block";

    dropdownMenu.addEventListener("click", function (event) {
      if (event.target.classList.contains("dropdown-item")) {
        inputField.value = event.target.textContent;
        dropdownMenu.style.display = "none";
        resetButton.classList.remove("inactive");
        resetButton.classList.add("active");
      }
    });
  });

  document.addEventListener("click", function (event) {
    if (!wrapper.contains(event.target)) {
      dropdownMenu.style.display = "none";
    }
  });

  // Reset functionality
  resetButton.addEventListener("click", function (event) {
    if (!resetButton.classList.contains("active")) return;

    event.preventDefault();
    document
      .querySelectorAll('.input-wrapper input[type="text"]')
      .forEach((input) => {
        input.value = input.placeholder;
      });
    resetButton.classList.remove("active");
    resetButton.classList.add("inactive");
  });
});
