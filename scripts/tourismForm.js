const tourismSurvey = document.getElementById("tourismSurvey");
const promptSuccess = document.getElementById("promptSuccess");
const promptMessage = document.getElementById("promptMessage");

//Listens to submit button within the website
tourismSurvey.addEventListener("submit", function (e) {
  e.preventDefault();

  //Condition where if the user's input were missing or invalid, will be denied for submission.
  if (!tourismSurvey.checkValidity()) {
    promptDenied.style.display = "flex";
    return;
  } else {
    //Continues to execute the function for storing the data from the form.
    promptSuccess.style.display = "flex";
    promptMessage.style.display = "none";
    confirmSubmission();
  }
});

function displayPrompt() {
  promptMessage.style.display = "flex";
}

//Function for storing the data in web's localStorage.
function confirmSubmission() {
  //Instantiate a FormData library.
  const formData = new FormData(tourismSurvey);

  //Adds every value from ticked checkboxes.
  const amenities = [];
  tourismSurvey
    .querySelectorAll('input[name="amenities"]:checked')
    .forEach((checkbox) => {
      amenities.push(checkbox.value);
    });
  //Adds the alternate string instead of displaying null/blank
  if (amenities.length === 0) {
    amenities.push("Not Observed/Used");
  }

  const suggestions = formData.get("suggestions").trim();
  if (!suggestions) {
    formData.set("suggestions", "N/A");
  }

  //Array entry for inserting data to localStorage.
  const newEntry = {
    name: formData.get("name"),
    nationality: formData.get("nationality"),
    destination: formData.get("destination"),
    visitDate: formData.get("visit-date"),
    cleanRating: formData.get("cleanStars"),
    amenities: amenities,
    suggestions: formData.get("suggestions"),
  };

  //Parses the array, pushes to new array, then sets the values to string.
  let feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
  feedbackData.push(newEntry);
  localStorage.setItem("feedbackData", JSON.stringify(feedbackData));

  //Resets the fields in the form.
  tourismSurvey.reset();
}
