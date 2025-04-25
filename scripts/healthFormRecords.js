document.addEventListener("DOMContentLoaded", function () {
  const healthData = JSON.parse(localStorage.getItem("healthData")) || [];
  const tableBody = document.querySelector("#healthDataResults tbody");

  if (healthData.length === 0) {
    const noDataRow = document.createElement("tr");
    noDataRow.innerHTML = `<td colspan="10" style="text-align:center;" class="noDataRow">No Data Available</td>`;
    tableBody.appendChild(noDataRow);
  } else {
    healthData.forEach((entry, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
    <td>${index + 1}</td>
    <td>${entry.fullName}</td>
    <td>${entry.age}</td>
    <td>${entry.gender}</td>
    <td>${entry.address}</td>
    <td>${entry.vaccineStatus}</td>
    <td class="list-symptoms">&bull; ${entry.symptom.join("<br> &bull; ")}</td>
    <td>${entry.lastMedicalCheckupDate}</td>
    <td><input type="button" name="viewHealthNotes" value="View" onclick="showContentWindow(${index}, 'healthNotes')"></td>
    <td><input type="button" name="deleteRecord" value="Delete" onclick="deleteRecord(${index})"></td>`;
      tableBody.appendChild(row);
    });
  }
});

console.log("This File is loaded.");

function deleteRecord(itemIndex) {
  const healthData = JSON.parse(localStorage.getItem("healthData")) || [];

  // Removes the specific record.
  healthData.splice(itemIndex, 1);

  // Saves the updated array
  localStorage.setItem("healthData", JSON.stringify(healthData));
  window.location.href = "../content-pages/healthFormRecords.html";
}

function showContentWindow(entryIndex, fieldName) {
  const healthData = JSON.parse(localStorage.getItem("healthData")) || [];
  const entry = healthData[entryIndex];

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
