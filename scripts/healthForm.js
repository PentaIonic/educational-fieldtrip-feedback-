function otherChecked() {
  const otherRadio = document.getElementsByName("gender");
  const otherFieldText = document.getElementById("otherGender");

  otherRadio.forEach((radio) => {
    radio.addEventListener("change", function () {
      if (this.value === "Other") {
        otherFieldText.readOnly = false;
        otherFieldText.focus();
        otherFieldText.style.cursor = "text";
      } else {
        otherFieldText.readOnly = true;
        otherFieldText.value = "";
        otherFieldText.style.cursor = "not-allowed";
      }
    });
  });
}

function displayPrompt() {
  promptMessage.style.display = "flex";
}

const healthForm = document.getElementById("healthForm");
const promptSuccess = document.getElementById("promptSuccess");
const promptMessage = document.getElementById("promptMessage");

healthForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const age = parseInt(healthForm.elements["age"].value, 10);
  if (isNaN(age) || age < 0 || age > 120) {
    alert("Please enter a valid age between 0 and 120.");
    return;
  }

  if (!healthForm.checkValidity()) {
    promptDenied.style.display = "flex";
    return;
  } else {
    promptSuccess.style.display = "flex";
    promptMessage.style.display = "none";
    confirmSubmission();
  }
});

function confirmSubmission() {
  const formData = new FormData(healthForm);

  let gender = formData.get("gender");
  if (gender === 'Other') {
    const custom = formData.get('otherGender').trim();
    gender = custom ? `Other: ${custom}` : 'Other';
  }

  const symptom = [];
  healthForm
    .querySelectorAll('input[name="symptom"]:checked')
    .forEach((checkbox) => {
      symptom.push(checkbox.value);
    });

  if (symptom.length === 0) {
    symptom.push("No symptoms");
  }

  const healthNotes = formData.get("healthNotes").trim();
  if (!healthNotes) {
    formData.set("healthNotes", "N/A");
  }

  const newEntry = {
    fullName: formData.get("fullName"),
    age: formData.get("age"),
    gender: gender,
    address: formData.get("address"),
    vaccineStatus: formData.get("vaccineStatus"),
    symptom: symptom,
    lastMedicalCheckupDate: formData.get("lastMedicalCheckupDate"),
    healthNotes: formData.get("healthNotes"),
  };

  let healthData = JSON.parse(localStorage.getItem("healthData")) || [];
  healthData.push(newEntry);
  localStorage.setItem("healthData", JSON.stringify(healthData));

  promptSuccess.style.display = "flex";
  promptMessage.style.display = "none";
  healthForm.reset();
}
