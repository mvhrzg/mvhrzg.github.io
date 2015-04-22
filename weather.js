(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://5dayweather.org/api.php?city=asheville,nc';

		$.getJSON(url, function(weatherResponse) {
			var $rideTable = $('<table id="weather">');
			var response = weatherResponse.data;
            var datestr;
            var month;
            var day;
            
			for (var prop in response) {
				var $item = $('<tr>');
				var $itemProp = $('<td>').text(prop);
				var $itemVal = $('<td>').text(response[prop]);
                if(prop == "date"){
                    datestr = JSON.stringify(response[prop]);
                    month = datestr.substring(6, 8);
                    day = datestr.substring(9, 11);
                }
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
                        case "location": break;
                        case "temperature": $item.append("Temperature: ", response["temperature"], " °F"); break;
                        case "humidity": $item.append("Humidity: ", response["humidity"], "%"); break;
                        case "skytext": $item.append("Weather: ", response["skytext"]); break;
                        case "wind": $item.append("Wind: ", response["wind"], " mph"); break;
                        case "date": $item.append("Today's date: ", response["day"], ", ", month + " ", day); break;
                }
                $rideTable.append($item);
            }                                     
			$('main').append($rideTable);
            
            
		});
	};
	
	$(document).ready(main);
}());