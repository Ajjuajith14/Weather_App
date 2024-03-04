const request = require("request");

const openWeatherMap = {
      BASE_URL : "https://api.openweathermap.org/data/2.5/weather?q=",
      SECRET_KEY : "b36aeb50a4dcf64963be13c7e17b4503",
}

const weatherData = (address, callback) =>{
      const url = openWeatherMap.BASE_URL + 
                  encodeURIComponent(address) + 
                  "&APPID=" +
                  openWeatherMap.SECRET_KEY;
      console.log(url);

      request({url, json: true}, (error,data) => {
            if(error){
                  callback(true, "Unable to Fetch Data, Please try Again" + error);

            }
            callback(false, data?.body);
      });
};

module.exports = weatherData;