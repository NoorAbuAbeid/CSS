document.getElementById("formId").addEventListener("submit", function (e) {
  let isValid = true;

  // Get form input values
  const nameInput = document.getElementById("modalName");
  const phoneInput = document.getElementById("modalTel");
  const emailInput = document.getElementById("modalEmail");

  // Check name input
  if (nameInput.value.trim() === "") {
    nameInput.value = "";
    nameInput.placeholder = "נא להזין שם תקין *";
    nameInput.classList.add("input-error");
    isValid = false;
  }

  // Check phone input
  if (phoneInput.value.trim() === "") {
    phoneInput.value = "";
    phoneInput.placeholder = "נא להזין מספר טלפון *";
    phoneInput.classList.add("input-error");
    isValid = false;
  }

  // Check email input
  if (emailInput.value.trim() === "") {
    emailInput.value = "";
    emailInput.placeholder = "נא להזין כתובת מייל *";
    emailInput.classList.add("input-error");
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
  } else {
    e.preventDefault();
    showSuccessModal();
  }
});
document.getElementById("formFooter").addEventListener("submit", function (e) {
  let isValidForFooter = true;

  const nameFooter = document.getElementById("footerName");
  const telFooter = document.getElementById("footerTel");
  const emailFooter = document.getElementById("footerEmail");

  // Check name input
  if (nameFooter.value.trim() === "") {
    nameFooter.value = "";
    nameFooter.placeholder = "נא להזין שם תקין *";
    nameFooter.classList.add("input-error");
    isValidForFooter = false;
  }

  // Check phone input
  if (telFooter.value.trim() === "") {
    telFooter.value = "";
    telFooter.placeholder = "נא להזין מספר טלפון *";
    telFooter.classList.add("input-error");
    isValidForFooter = false;
  }

  // Check email input
  if (emailFooter.value.trim() === "") {
    emailFooter.value = "";
    emailFooter.placeholder = "נא להזין כתובת מייל *";
    emailFooter.classList.add("input-error");
    isValidForFooter = false;
  }

  if (isValidForFooter) {
    e.preventDefault(); //
    showSuccessModal(); // Show modal
  } else {
    e.preventDefault();
  }
});
/////////////////////////////////////////////////////////////////
document
  .getElementById("contactsFormBody")
  .addEventListener("submit", function (e) {
    let isValid = true;
    //for footer
    const name = document.getElementById("course-information-Name");
    const tel = document.getElementById("course-information-Tel");
    const email = document.getElementById("course-information-Email");
    // Check name input
    if (name.value.trim() === "") {
      name.value = "";
      name.placeholder = "נא להזין שם תקין *";
      name.classList.add("input-error");
      isValid = false;
    }

    // Check phone input
    if (tel.value.trim() === "") {
      tel.value = "";
      tel.placeholder = "נא להזין מספר טלפון *";
      tel.classList.add("input-error");
      isValid = false;
    }
    // Check email input
    if (email.value.trim() === "") {
      email.value = "";
      email.placeholder = "נא להזין כתובת מייל *";
      email.classList.add("input-error");
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault();
    } else {
      e.preventDefault();
      showSuccessModal();
    }
  });

document.getElementById("exitModalId").addEventListener("click", function () {
  const modal = document.querySelector(".onload-contact-information-modal");
  modal.style.animation = "slideUpModal 1s ease forwards";

  setTimeout(function () {
    modal.style.display = "none";
  }, 1000); // 1 second delay - animation
});

function rotateArrowAndShowAnswer(event) {
  const questionPart = event.currentTarget;

  const arrow = questionPart.querySelector(".down-arrow");
  const publicServiceDiv = questionPart.closest(".public-service"); //parent
  if (publicServiceDiv) publicServiceDiv.style.height = "auto";

  const questionsSectionDiv = questionPart.closest(".questions-section"); //parent
  if (questionsSectionDiv) questionsSectionDiv.style.height = "auto";

  arrow.classList.toggle("rotated");

  const answer = questionPart.nextElementSibling;
  if (answer.style.display === "none" || !answer.style.display) {
    answer.style.display = "block";
    questionPart.style.borderBottom = "none";
  } else {
    answer.style.display = "none";
    questionPart.style.borderBottom = "1px solid rgb(227, 222, 222)";
  }
}

window.addEventListener("load", function () {
  setTimeout(function () {
    const modal = document.querySelector(".onload-contact-information-modal");
    modal.style.display = "flex";
  }, 5000);
});

function showSuccessModal() {
  const modal = document.querySelector(".success-modal");
  modal.style.display = "flex";
}

document
  .getElementById("exitModalIdInSuccess")
  .addEventListener("click", function () {
    const modal = document.querySelector(".success-modal");
    modal.style.display = "none";
    document.getElementById("modalName").value = "";
    document.getElementById("modalTel").value = "";
    document.getElementById("modalEmail").value = "";

    document.getElementById("footerName").value = "";
    document.getElementById("footerTel").value = "";
    document.getElementById("footerEmail").value = "";

    document.getElementById("course-information-Name").value = "";
    document.getElementById("course-information-Tel").value = "";
    document.getElementById("course-information-Email").value = "";

    // Remove placeholders when closing the modal
    document.getElementById("footerName").placeholder = "";
    document.getElementById("footerTel").placeholder = "";
    document.getElementById("footerEmail").placeholder = "";
    document.getElementById("modalName").placeholder = "";
    document.getElementById("modalTel").placeholder = "";
    document.getElementById("modalEmail").placeholder = "";
    document.getElementById("course-information-Name").placeholder = "";
    document.getElementById("course-information-Tel").placeholder = "";
    document.getElementById("course-information-Email").placeholder = "";
  });
