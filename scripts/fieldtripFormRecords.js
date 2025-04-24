document.addEventListener("DOMContentLoaded", function  () {
    const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
    const tableBody = document.querySelector("#feedbackDataResults tbody");

    if (feedbackData.length === 0) {
        const noDataRow = document.createElement("tr");
        noDataRow.innerHTML = `<td colspan="11" style="text-align:center;">No Data Available</td>`;
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
            <td>${entry.favorite}</td>
            <td>${entry.learnFeedback}</td>
            <td>${entry.educRating}</td>
            <td>${entry.cleanRating}</td>
            <td>&bull; ${entry.amenities.join("<br> &bull; ")}</td>
            <td>${entry.suggestions}</td>`;
            tableBody.appendChild(row);
        });
    }
});