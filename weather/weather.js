$(document).ready(function(){
  $(submitCity).click(function() {
    return getWeather();
  });

});

function getWeather() {
  let city = $("#city").val();
  if(city != '' && isNaN(city)) {
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=314da3cd23beec497d145d1f14f39b3c",
      type: "GET",
      dataType: "jsonp",
      success: function(data){
        const widget = showResults(data)
        $("#showWeather").html(widget);
      }
    });
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us" + "&units=imperial" + "&APPID=314da3cd23beec497d145d1f14f39b3c",
      type: "GET",
      dataType: "jsonp",
      success: function(data){
        const widget = showResults(data)
        $("#showForecast").html(widget);
      }
    });
  }
}

const temp = round(data.main.temp)

function showResults(data){
  return  "<div class='weatherResultsContainer'>"+
          "<div class='description'>"+
          "<img class='weatherResults description1' src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'>"+
          "<p class='weatherResults description2'>"+data.weather[0].description+"</p>"+
          "</div>"+
          "<p class='weatherResults weatherTitle' style='padding-top:40px;'>"+data.name+", "+data.sys.country+"</p>"+
          "<p class='weatherResults temperature'>"+data.main.temp+" &deg;F</p>"+
          "<p class='weatherResults tempRange'>Temp Range: "+data.main.temp_max+" &deg;F - "+data.main.temp_max+" &deg;F</p>"+
          "<p class='weatherResults tempRange' style='padding-bottom:40px;'>Wind Speed: "+data.wind.speed+" MPH</p>";
          "</div>"
}