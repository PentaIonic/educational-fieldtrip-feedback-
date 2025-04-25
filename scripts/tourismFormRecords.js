document.addEventListener("DOMContentLoaded", function () {
  const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
  const tableBody = document.querySelector("#feedbackDataResults tbody");

  if (feedbackData.length === 0) {
    const noDataRow = document.createElement("tr");
    noDataRow.innerHTML = `<td colspan="9" style="text-align:center;" class="noDataRow">No Data Available</td>`;
    tableBody.appendChild(noDataRow);
  } else {
    feedbackData.forEach((entry, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
  <td>${index + 1}</td>
  <td>${entry.name}</td>
  <td>${entry.gradeLevel}</td>
  <td>${entry.destination}</td>
  <td>${entry.visitDate}</td>
  <td>${entry.cleanRating}</td>
  <td class="list-amenities">&bull; ${entry.amenities.join("<br> &bull; ")}</td>
  <td><input type="button" name="viewSuggestion" value="View" onclick="showContentWindow(${index}, 'suggestions')"></td>
  <td><input type="button" name="deleteRecord" value="Delete" onclick="deleteRecord(${index})"></td>`;
      tableBody.appendChild(row);
    });
  }
});

function deleteRecord(itemIndex) {
  const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];

  // Removes the specific record.
  feedbackData.splice(itemIndex, 1);

  // Saves the updated array
  localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
  window.location.href = "../content-pages/tourismFormRecords.html";
}

function showContentWindow(entryIndex, fieldName) {
  const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
  const entry = feedbackData[entryIndex];

  if (entry && entry[fieldName] !== undefined) {
    const textarea = document.getElementById("content");
    const windowElement = document.getElementById("textAreaWindow");

    textarea.value = entry[fieldName];
    windowElement.style.display = "block";
  }
}

function closeContentWindow() {
  const windowElement = document.getElementById("textAreaWindow");
  windowElement.style.display = "none";
}
