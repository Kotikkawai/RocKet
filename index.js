// for registration
function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  resetErrors();

  if (!firstName) {
    showError("firstNameError", "Please, enter  your Forename.");
  }

  if (!lastName) {
    showError("lastNameError", "Please, enter your Surname.");
  }

  if (!password) {
    showError("passwordError", "Please, enter password.");
  }

  if (!confirmPassword) {
    showError("confirmPasswordError", "Please, enter the password again.");
  }

  if (password !== confirmPassword) {
    showError("passwordError", "Password mismatch.");
    showError("confirmPasswordError", "Password mismatch.");
  }
}

function resetErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.textContent = "";
  });
}

function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}
// the and of registratoin

// start pereshodi 
document.addEventListener("DOMContentLoaded", function() {
  // Сховати всі розділи при завантаженні сторінки
  hideAllSections();
});

function hideAllSections() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
      section.style.display = 'none';
  });
}

function showPage(pageId) {
  hideAllSections();
  const selectedSection = document.getElementById(pageId);
  if (selectedSection) {
      selectedSection.style.display = 'block';
  }
}
// the and of pereshodi 