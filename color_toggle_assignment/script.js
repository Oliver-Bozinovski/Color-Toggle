const toggleMenuIcon = document.querySelector("#toggle-menu-icon");
const menuContainer = document.querySelector("#menu-container");
const radioBtns = document.querySelectorAll("input[type=radio]");


// Menu toggle on hover!

toggleMenuIcon.addEventListener("mouseenter", function() {
  menuContainer.style.visibility = "visible";
  menuContainer.style.left = "0";
});

menuContainer.addEventListener("mouseleave", function() {
  menuContainer.style.visibility = "hidden";
  menuContainer.style.left = "-100%";
});


// Selecting the background color with a rado button !

radioBtns.forEach(function(radioBtn) {
    radioBtn.addEventListener("click", function() {
      document.body.style.backgroundColor = this.value;
      document.querySelector("#color-name").innerText = this.value;
      menuContainer.style.visibility = "hidden";
      menuContainer.style.left = "-100%";
    });
});

// Changing the background color on keydown event!

document.addEventListener("keydown", function(event) {
    if (event.key === "0") {
      document.body.style.backgroundColor = "gray";
      document.querySelector("#color-name").innerText = "gray";
      document.querySelector("input[type=radio][value=gray]").checked = true;
    } else if (event.key === "1") {
      document.body.style.backgroundColor = "red";
      document.querySelector("#color-name").innerText = "red";
      document.querySelector("input[type=radio][value=red]").checked = true;
    } else if (event.key === "2") {
      document.body.style.backgroundColor = "orange";
      document.querySelector("#color-name").innerText = "orange";
      document.querySelector("input[type=radio][value=orange]").checked = true; 
    } else if (event.key === "3") {
      document.body.style.backgroundColor = "purple";
      document.querySelector("#color-name").innerText = "purple";
      document.querySelector("input[type=radio][value=purple]").checked = true;
    } else if (event.key === "4") {
      document.body.style.backgroundColor = "green";
      document.querySelector("#color-name").innerText = "green";
      document.querySelector("input[type=radio][value=green]").checked = true;
    }
  });
