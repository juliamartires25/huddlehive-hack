document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");

    function generateCalendar() {
        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        let calendarHTML = "<table><tr>";
        days.forEach(day => {
            calendarHTML += `<th>${day}</th>`;
        });
        calendarHTML += "</tr><tr>";

        for (let i = 1; i <= 30; i++) {
            if (i % 7 === 1) {
                calendarHTML += "</tr><tr>";
            }
            calendarHTML += `<td class="date-cell">${i}</td>`;
        }
        calendarHTML += "</tr></table>";

        calendar.innerHTML = calendarHTML;
    }

    generateCalendar();
});

