const navbarToggle = document.querySelector(".dot-navbar-toggle");
const navbarMenu = document.querySelector(".dot-navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

const form = document.querySelector("form");
const emailPattern = /(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/;
const message = document.getElementById("message");
const submitBtn = document.getElementById("btn3");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = form.email.value.trim();
  const emailResult = emailPattern.test(emailValue);

  submitBtn.style.display = "none";

  if (emailResult) {
    message.setAttribute("class", "success");
    message.textContent = "Thank you for subscribing to our newsletter!";
    form.reset();
  } else {
    alert("Subcription Unsuccessful");

    submitBtn.style.display="block";
  }
});