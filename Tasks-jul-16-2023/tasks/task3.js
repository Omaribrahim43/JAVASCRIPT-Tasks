let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let birthDate = document.getElementById("birthDate");
let email = document.getElementById("email");
let conEmail = document.getElementById("c-email");
let pass = document.getElementById("pass");
let conPass = document.getElementById("c-pass");

firstName.onkeyup = () => {
  let regex = /^[a-zA-Z]/;
  if (!regex.test(firstName.value)) {
    document.getElementById("fn-message").innerHTML = "Invalid name given.";
  } else {
    document.getElementById("fn-message").innerHTML = "Valid name given.";
  }
};

lastName.onkeyup = () => {
  let regex = /^[a-zA-Z]/;
  if (!regex.test(lastName.value)) {
    document.getElementById("ln-message").innerHTML = "Invalid name given.";
  } else {
    document.getElementById("ln-message").innerHTML = "Valid name given.";
  }
};

birthDate.onkeyup = () => {
  let regex = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}$/;
  if (!regex.test(birthDate.value)) {
    document.getElementById("bd-message").innerHTML = "Invalid Date given.";
  } else {
    document.getElementById("bd-message").innerHTML = "Valid Date given.";
  }
};

email.onkeyup = () => {
  let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  if (!regex.test(email.value)) {
    document.getElementById("email-message").innerHTML = "Invalid email given.";
  } else {
    document.getElementById("email-message").innerHTML = "Valid email given.";
  }
};

conEmail.onkeyup = () => {
  let regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;

  if (conEmail.value != email.value) {
    document.getElementById("c-email-message").innerHTML =
      "it does not match the email given.";
  } else if (!regex.test(conEmail.value)) {
    document.getElementById("c-email-message").innerHTML =
      "Invalid email given.";
  } else {
    document.getElementById("c-email-message").innerHTML = "Valid email given.";
  }
};

pass.onkeyup = () => {
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!regex.test(pass.value)) {
    document.getElementById("pass-message").innerHTML =
      "Invalid password given.";
  } else {
    document.getElementById("pass-message").innerHTML = "Valid password given.";
  }
};

conPass.onkeyup = () => {
  let regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (conPass.value != pass.value) {
    document.getElementById("c-pass-message").innerHTML =
      "it does not match the password given.";
  } else if (!regex.test(conPass.value)) {
    document.getElementById("c-pass-message").innerHTML =
      "Invalid password given.";
  } else {
    document.getElementById("c-pass-message").innerHTML =
      "Valid password given.";
  }
};
