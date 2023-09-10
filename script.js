apiKey="34a63c7f03fda3f5d814d9b2d6e7d61e";
let weather ={
    fetchWeather:function async (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&appid=" + apiKey)
    .then((response)=> response.json())
    .then((data) => this.displayWeather(data));

},
    displayWeather: function(data){
        const {name} = data;
        const { icon , description} = data.weather[0];
        const {temp , humidity}= data.main;
        const {speed}=data.wind;
        const{country}=data.sys;

        //console.log(name,icon,descripton,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".country").innerText = "Country:" + country;
        document.querySelector(".icon").src="http://openweathermap.org/img/wn/" +icon+ ".png";
        document.querySelector(".description").innerText=description;
        document.querySelector(".temp").innerText = temp + "°C"
        document.querySelector(".Humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed:"  + speed + "km/hr";
        document.querySelector(".weather").classList.remove("loading");
        
   },
   search:function() {
    this.fetchWeather(document.querySelector(".search-bar").value);
   }
};
document.querySelector(".search button").addEventListener("click",function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});
// function backgroundChange(weather) {
//     if (over == Rain) {
//     document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1693856757774-e749742aefe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')";
//     } else if (weatherinfo == Clouds) {
//     document.body.style.backgroundImage = "";
//     } else if (sky-cond == Clear) {
//     document.body.style.backgroundImage = "url('https://image.freepik.com/free-photo/panorama-sky-sunrise-sunset-beautiful-view-dark-blue-clouds-lit-by-bright-orange-yellow-sun-clear-sky-beauty-power-nature-meteorology-climate-changing-concept_127089-8097.jpg')";
//     }else if (sky-cond == Haze) {
//       document.body.style.backgroundImage = "url(https://www.pixelstalk.net/wp-content/uploads/2016/06/Dark-Woods-HD-Wallpaper.jpg)";
//     } else {
//     document.body.style.backgroundImage= "url('https://images.unsplash.com/photo-1693856757774-e749742aefe4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')";
//     }
//   }

weather.fetchWeather("Delhi");