const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");
const btn = document.querySelector("#btn");

// Show Error Function
const showError = (input, message) => {
  let parentElement = input.parentElement;
  parentElement.classList = "form-control error";
  const small = parentElement.querySelector("small");
  const successIcon = parentElement.querySelectorAll("i")[0];
  const erroricon = parentElement.querySelectorAll("i")[1];

  erroricon.style.visibility = "visible";
  successIcon.style.visibility = "hidden";
  small.innerText = message;
};

//Show Success Function
const showSuccess = (input) => {
  let parentElement = input.parentElement;
  parentElement.classList = "form-control success";
  const successIcon = parentElement.querySelectorAll("i")[0];
  const erroricon = parentElement.querySelectorAll("i")[1];
  erroricon.style.visibility = "hidden";
  successIcon.style.visibility = "visible";
};

// checkPasswordLength

const checkPasswordLength = (input, min, max) => {
  if (input.value.length < min) {
    showError(input, "password atleast 6 charecter");
  } else if (input.value.length > max) {
    showError(input, `Password maximum charecter is ${max}`);
  }
};

// Function Check Empty

const checkEmpty = (elements) => {
  elements.forEach((element) => {
    if (element.value === "") {
      showError(element, "Input required");
    } else {
      showSuccess(element);
    }
  });
};

// CheckEmail Function

const checkEmail = (email) => {
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (reg.test(email.value)) {
    showSuccess(email);
  } else {
    showError(email, "Invalid Email");
  }
};

// checkConfirmPassword

const checkConfirmPassword = (password, confirmPassword) => {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, "Password is Not Match");
  }
};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // call checkEmpty function
  checkEmpty([userName, email, password, confirmPassword]);

  // call checkEmail function
  checkEmail(email);

  // call checkpassword function
  checkPasswordLength(password, 6, 20);
  checkPasswordLength(confirmPassword, 6, 20);

  // checkConfirmPassword
  checkConfirmPassword(password, confirmPassword);
});
