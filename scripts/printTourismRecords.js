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
