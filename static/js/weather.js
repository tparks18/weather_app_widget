$(document).ready(function(){

    $('#submitWeather').click(function() {

        var city = $("#city").val();

        if (city != '') {

            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial' + '&appid=6e3bb1f7cc4c07eab5f35f87aefe8536',
                type: "GET",
                dataType:"jsonp",
                success: function(data){
                    var widget = show(data);

                    $("#show").html(widget);
                    $("#city").val('');
                }
            });

        } else {
            $("#error").html('Field cannot be empty');
        }

    });
});

function show(data) {
    return "<h2 cstyle='font-size:40px; font-weight: bold;'>Current Weather for " + data.name + ", " + data.sys.country +"</h2>" +
            "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
            "<h3><strong>Description</strong>: <img src='http://openweathermap.org/img/wn/" + data.weather[0].icon+ ".png'> " + data.weather[0].description +"</h3>" +
            "<h3><strong>Temperature</strong>: "+ data.main.temp +"&deg;F</h3>" +
            "<h3><strong>Feels Like</strong>: "+ data.main.feels_like +"&deg;F</h3>" +
            "<h3><strong>High</strong>: "+ data.main.temp_max +"&deg;F</h3>" +
            "<h3><strong>Low</strong>: "+ data.main.temp_min +"&deg;F</h3>" +
            "<h3><strong>Humidity</strong>: "+ data.main.humidity +"%</h3>";
}

