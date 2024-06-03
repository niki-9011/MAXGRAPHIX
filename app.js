function myFunction() {
  var x = document.getElementById("myLinks");
  var navIcon = document.getElementsByClassName("icon")[0];

  if (x.style.display === "block") {
    x.style.display = "none";
    navIcon.classList.remove("active");
  } else {
    x.style.display = "block";
    navIcon.classList.add("active");
  }
}

function showContactForm() {
  document.getElementById("contactForm").style.display = "block";
}

function closeContactForm() {
  document.getElementById("contactForm").style.display = "none";
}


