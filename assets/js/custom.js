var day_date = new Date() ; // 오늘 날짜
var work_start = new Date (2015, 05, 01); // 나의 경력 시작일자


var now_year = day_date.getFullYear();
var now_month = ('0' + (day_date.getMonth() + 1)).slice(-2);
var now_day = ('0' + day_date.getDate()).slice(-2);

var work_year = work_start.getFullYear();
var work_month = ('0' + (work_start.getMonth())).slice(-2);
var work_day = ('0' + work_start.getDate()).slice(-2);



var datestring = now_year + '-' + now_month + '-' + now_day ;
var workstring = work_year + '-' + work_month + '-' + work_day ;
var total_work = new Date(datestring)- (workstring) / (1000*60*60*24);


console.log(datestring);
console.log(workstring);
console.log(total_work);

