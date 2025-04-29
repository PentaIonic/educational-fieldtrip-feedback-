function printTable() {
  var screenWidth = window.screen.width;
  var screenHeight = window.screen.height;
  var printWindow = window.open(
    "../content-pages/printTourismRecords.html",
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
  const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
  const tableBody = document.querySelector("#feedbackDataResults tbody");

  if (feedbackData.length === 0) {
    const noDataRow = document.createElement("tr");
    noDataRow.innerHTML = `<td colspan="8" style="text-align:center;" class="noDataRow">No Data Available</td>`;
    tableBody.appendChild(noDataRow);
  } else {
    feedbackData.forEach((entry, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
  <td>${index + 1}</td>
  <td>${entry.name}</td>
  <td>${entry.nationality}</td>
  <td>${entry.destination}</td>
  <td>${entry.visitDate}</td>
  <td style="text-align: center;">${entry.cleanRating}/5 &#9734;</td>
  <td>&bull; ${entry.amenities.join("<br> &bull; ")}</td>
  <td>${entry.suggestions}</td>`;
      tableBody.appendChild(row);
    });
  }
});
