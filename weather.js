(function() {
	"use strict";
	
	var main = function() {
		var url = 'http://api.worldweatheronline.com/free/v2/weather.ashx?key=8d31ac78b510a273fcb9f5c0b5fd9&num_of_days=1&q=35.5800,-82.5558&format=json'
        
		$.getJSON(url, function(weather) {
			var $rideTable = $('<table id="weather">');
			var response = weather.data;
            //weather vars
            var datestr,
                maxstr,
                minstr,
                month,
                day,
                maxTemp,
                minTemp;
            
            //condition vars
            var feelstr,
                feel, 
                temp,
                humidity,
                precipitation,
                windSpeed,
                condition; //nested
                
                
            console.log(response);
            
			for (var prop in response) {
                
                console.log("%s %s", prop, response[prop][0]);
                var $item = $('<tr>');
                var $itemProp = $('<td>').text(prop);
                var $itemVal = $('<td>').text(response[prop]);

                if(prop == 'weather'){
                    datestr = JSON.stringify(response[prop][0].date);
                    month = datestr.substring(6, 8);
                    day = datestr.substring(9, 11);
                    maxstr = JSON.stringify(response[prop][0].maxtempF);
                    maxTemp = maxstr.substring(1, 3);
                    minstr = JSON.stringify(response[prop][0].mintempF);
                    minTemp = minstr.substring(1, 3);
                }
                
                if(prop == 'current_condition'){
                    feelstr = JSON.stringify(response[prop][0].FeelsLikeF);
                    feel = feelstr.substring(1, 3);
                    
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
                        case "weather": $item.append("Today is ", month, "&nbsp;", day); 
                                        $item.append("<tr>", "Max Temp: ", maxTemp, "°F"); 
                                        $item.append("<tr>", "Min Temp: ", minTemp, "°F"); //break;
                        case "current_condition": $item.append("<tr>", "Real Feel: ", feel, "°F"); break;
                }
            }
            $rideTable.append($item);
			$('main').append($rideTable);
		});
	};
   
	
	$(document).ready(main);
}());