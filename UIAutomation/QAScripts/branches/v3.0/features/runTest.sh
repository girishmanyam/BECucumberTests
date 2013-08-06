
date_time=`(date +%y%m%d)`

echo $date_time

touch "../reports/result_$date_time.html"

cucumber suggestedMovie.feature #-f "html" -o ../reports/result_$date_time.html
