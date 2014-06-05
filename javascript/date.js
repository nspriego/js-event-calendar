var currentDate = function () {
	var current_date = new Date(); 
	return current_date.toDateString();
};

var currentMonthNum = function() {
	var date = new Date();
	return date.getMonth();
};

var monthName = function(monthNum) {
	var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	return monthNames[monthNum];
};

var dateMatrix = function (monthNum) {
	// set offset based on monthNum
	if (monthNum == 0)  { var count = -2 };
	if (monthNum == 1)  { var count = -5 };
	if (monthNum == 2)  { var count = -5 };
	if (monthNum == 3)  { var count = -1 };
	if (monthNum == 4)  { var count = -3 };
	if (monthNum == 5)  { var count =  1 };
	if (monthNum == 6)  { var count = -1 };
	if (monthNum == 7)  { var count = -4 };
	if (monthNum == 8)  { var count =  0 };
	if (monthNum == 9)  { var count = -2 };
	if (monthNum == 10) { var count = -5 };
	if (monthNum == 11) { var count =  0 };

	var dates = [[],[],[],[],[],[]];

	for (var i = 0; i < 6; i++) {
		for (var j = 0; j < 7; j++) {
			var date = new Date(2014, monthNum, 1);
			date.setDate(count);
			dates[i][j] = date;
			count++;
		};
	};
	return dates;
};