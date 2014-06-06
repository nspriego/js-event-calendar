function showCalendar (monthNum) {
	ele = document.getElementById("calendar");
	ele.innerHTML = createCalendar(6,7,monthNum);
}

function createCalendar (rows, columns, monthNum) {
	calendarDays = dateMatrix(monthNum);
	
	htmlString = "<table>";
	htmlString += calendarHeaderRow();
	
	for (var i = 0; i < rows; i++) { // for each row
		
		htmlString += "<tr class='date-content-row'>"
		for (var j = 0; j < columns; j++) {
			htmlString += "<td id='" + calendarDays[i][j] + "'>" + dateContents(calendarDays[i][j]) + "</td>"; // create table cell
		};
		htmlString += "</tr>";
	};				
	htmlString += "</table>";

	return htmlString;
}

function calendarHeaderRow () {
	DAYS = ['sun', 'mon', 'tue', 'wed', 'thurs', 'fri', 'sat'];

	htmlString = "<tr>";
	for (var i = 0; i < DAYS.length; i++) {
		htmlString += "<th>" + DAYS[i] + "</th>" ;
	}; 
	htmlString += "</tr>";

	return htmlString;
}

function dateContents (date) {
	divContents =  "<div class='date-content'>";
	divContents += "<div class='date-number'>" + date.getDate() + "</date>";
	divContents += "<div class='date-events'></date>";
	divContents += "</div>";

	return divContents;
}