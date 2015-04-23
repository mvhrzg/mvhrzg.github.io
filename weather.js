(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://api.worldweatheronline.com/free/v2/weather.ashx?key=8d31ac78b510a273fcb9f5c0b5fd9&num_of_days=1&q=35.5800,-82.5558&format=json'
        
		$.getJSON(url, function(weather) {
			var $rideTable = $('<table id="weather">');
			var response = weather.data;
            var datestr;
            var month;
            var day;
            console.log(response);
            
			for (var prop in response) {
                
//                if(response['weather'][prop] == 'date'){
//                    datestr = response['weather'][prop] = "DATE";
//                    console.log("DATE", datestr);
//                }
                
                var $item = $('<tr>');
                var $itemProp = $('<td>').text(prop);
                var $itemVal = $('<td>').text(response[prop]);
                if(response[prop][0] == 'current_condition'){
                    $item = response[prop][0];
                }
                console.log("%s:", prop, response[prop][0]);//returns items in nested arrays inside each prop
                
                switch(month){
                        case "01" : month = "January"; break;
                        case "02" : month = "February"; break;
                        case "03" : month = "March"; break;
                        case "04" : month = "April"; break;
                        case "05" : month = "May"; break;
                        case "06" : month = "June"; break;
                        case "07" : month = "July"; break;
                        case "08" : month = "August"; break;
                        case "09" : month = "September"; break;
                        case "10" : month = "October"; break;
                        case "11" : month = "November"; break;
                        case "12" : month = "December"; break;
                }

                switch(prop){
                        case "temperature": $item.append("Temperature: ", response["temperature"], " °F"); break;
                        case "humidity": $item.append("Humidity: ", response["humidity"], "%"); break;
                        case "skytext": $item.append("Weather: ", response["skytext"]); break;
                        case "wind": $item.append("Wind: ", response["wind"], " mph"); break;
                        case "date": $item.append("Today's date: ", response["day"], ", ", month + " ", day); break;
                }
            }
            $rideTable.append($item);
			$('main').append($rideTable);
		});
	};
   
	
	$(document).ready(main);
}());