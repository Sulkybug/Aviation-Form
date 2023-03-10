const form = document.querySelector("form");
let checkBoxes = form.querySelectorAll('input[type="checkbox"]');

form, addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let formData = new FormData(form);
  let data = Object.fromEntries(formData.entries());
  let jsonData = JSON.stringify(data);

  let improve = [];
  let checkBoxes = document.getElementsByName("improve");
  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      improve.push(checkBoxes[i].value);
    }
  }
  console.log(improve);
  console.log(jsonData);
}
