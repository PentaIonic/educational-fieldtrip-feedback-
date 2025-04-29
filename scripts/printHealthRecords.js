function printTable() {
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var printWindow = window.open(
    "../content-pages/printHealthRecords.html",
    "_blank",
    `width=${screenWidth},height=${screenHeight}`
  );

  printWindow.onload = function () {
    printWindow.focus(); // Make sure it's focused
    printWindow.print();
    printWindow.onafterprint = function () {
      printWindow.close();
    };
  };
}

document.addEventListener("DOMContentLoaded", function () {
  const healthData = JSON.parse(localStorage.getItem("healthData")) || [];
  const tableBody = document.querySelector("#healthDataResults tbody");

  if (healthData.length === 0) {
    const noDataRow = document.createElement("tr");
    noDataRow.innerHTML = `<td colspan="9" style="text-align:center;" class="noDataRow">No Data Available</td>`;
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
    <td>&bull; ${entry.symptom.join("<br> &bull; ")}</td>
    <td>${entry.lastMedicalCheckupDate}</td>
    <td>${entry.healthNotes}</td>`;
      tableBody.appendChild(row);
    });
  }
});
