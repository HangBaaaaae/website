var day_date = new Date() ; // 오늘 날짜
var work_start = "2015-07-01"; // 나의 경력 시작일자
var working_date = day_date.getTime() - work_start.getTime() ;
var working_day = working_date / (1000*60*60*24) ;
console.log(working_day);
