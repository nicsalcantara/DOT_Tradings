const navbarToggle = document.querySelector(".dot-navbar-toggle");
const navbarMenu = document.querySelector(".dot-navbar-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

const forms = document.querySelector("#inquiry-form");
const namePattern = /^[a-zA-Z\s'-]+$/; // Regex for name: letters, spaces, hyphens, apostrophes only
const phonePattern = /^[0-9\s\-\(\)]+$/; // Regex for phone: digits, spaces, hyphens, parentheses only
const messagePattern = /^[a-zA-Z0-9\s.,!?'"-]+$/; // Regex for message: alphanumeric, spaces, common punctuation
const messageElement = document.querySelector(".inquiry-card-second-message");
const submitBtnn = document.querySelector("#inquiry-form button");

forms.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = forms.querySelector("#name").value.trim();
  const emailValue = forms.querySelector("#email").value.trim();
  const phoneValue = forms.querySelector("#phone").value.trim();
  const messageValue = forms.querySelector("#message").value.trim();

  if (nameValue === "" || !namePattern.test(nameValue)) {
    messageElement.setAttribute("class", "error");
    messageElement.innerHTML = "Error. Please check again your input";
    forms.reset();
    return;
  }

  if (emailValue === "" || !emailPattern.test(emailValue)) {
    messageElement.setAttribute("class", "error");
    messageElement.innerHTML = "Error. Please check again your input";
    forms.reset();
    return;
  }

  if (phoneValue === "" || !phonePattern.test(phoneValue)) {
    messageElement.setAttribute("class", "error");
    messageElement.innerHTML = "Error. Please check again your input";
    forms.reset();
    return;
  }

  if (messageValue === "" || !messagePattern.test(messageValue)) {
    messageElement.setAttribute("class", "error");
    messageElement.innerHTML = "Error. Please check again your input";
    forms.reset();
    return;
  }

  submitBtnn.style.display = "none";
  messageElement.setAttribute("class", "success");
  messageElement.textContent =
    "Thank you for your inquiry! We will get back to you soon.";
  forms.reset();
});

//FOOTER PART

const form = document.querySelector(".footer form");
const emailPattern = /(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/;
const message = document.querySelector(".form-text");
const submitBtn = document.querySelector(".btn2");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailValue = form.querySelector("input[type='email']").value.trim();
  const emailResult = emailPattern.test(emailValue);

  submitBtn.style.display = "none";

  if (emailResult) {
    message.setAttribute("class", "success");
    message.textContent = "Thank you for subscribing to our newsletter!";
    form.reset();
  } else {
    alert("Subscription Unsuccessful");
  }
});
