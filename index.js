function toggleFAQ(id) {
  const answer = document.getElementById(`answer-${id}`);
  const icon = document.getElementById(`icon-${id}`);

  if (answer.style.display === "block") {
    answer.style.display = "none";
    icon.src =
      "https://img.icons8.com/?size=100&id=62888&format=png&color=000000";
  } else {
    answer.style.display = "block";
    icon.src =
      "https://img.icons8.com/?size=100&id=37783&format=png&color=000000";
  }
}

const form = document.getElementById("form");
// const result = document.getElementById('result');

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  // result.innerHTML = "Please wait..."

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        alert("Form submitted successfully");
      } else {
        console.log(response);
        console.log(json.message);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Something went wrong!");
    })
    .then(function () {
      form.reset();
    });
});
