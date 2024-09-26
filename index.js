function toggleFAQ(id) {
  const answer = document.getElementById(`answer-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.src = "https://img.icons8.com/?size=100&id=62888&format=png&color=000000";
  } else {
    answer.style.display = "block";
    icon.src = "https://img.icons8.com/?size=100&id=37783&format=png&color=000000";
  }
}
function onSubmit(event) {
  event.preventDefault();
  alert("Form submitted!");
}

function onChange() {
  const captchaValue = grecaptcha.getResponse();
  const submitBtn = document.getElementById("submitBtn");
  if (captchaValue) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}
