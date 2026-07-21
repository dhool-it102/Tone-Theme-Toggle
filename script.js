// Step 1: Select the elements we need from the page
const themeButton = document.querySelector("#theme-button");
const body = document.querySelector("body");

// Step 2: Listen for clicks on the button
themeButton.addEventListener("click", function () {
  // Step 3: Toggle the .dark-mode class on the <body>
  // (adds it if missing, removes it if present)
  body.classList.toggle("dark-mode");

  // Step 4: Update the button text based on the current theme
  if (body.classList.contains("dark-mode")) {
    themeButton.textContent = "🌙 Switch to Light Mode";
  } else {
    themeButton.textContent = "🌑 Switch to Dark Mode";
  }
});