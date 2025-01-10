/*
*https://api.openweathermap.org
*Api key-> e42de2b2830ca07b1f80d1e47507b312
*/
class Meteorology {
    constructor() {
        // Nabples Coordinates
        this.latitud = "40.8522";
        this.longitude = "14.2681";
        this.consultarMeteorologia();
    }

    consultarMeteorologia() {
        const url = "https://api.openweathermap.org/data/2.5/forecast?lat="
            + this.latitud + "&lon=" + this.longitude + 
            "&units=metric&appid=e42de2b2830ca07b1f80d1e47507b312";

        $.ajax({
            dataType: "json",
            url: url,
            method: 'GET',
            success: (datos) => {
                let forecast5Days = [];

                let targetDate = null;
                let targetHour = null;
                let dayNumber = 0;

                for (let f of datos["list"]) {
                    let dateForecast = new Date(f["dt_txt"]);

                    // Initial Date Target
                    if (!targetDate) {
                        targetDate = new Date(dateForecast);
                        targetHour = dateForecast.getHours();
                    }

                    if (dateForecast.getDate() === targetDate.getDate() &&
                        dateForecast.getMonth() === targetDate.getMonth() &&
                        dateForecast.getFullYear() === targetDate.getFullYear() &&
                        dateForecast.getHours() >= targetHour) {

                        forecast5Days.push(f);
                        dayNumber++;

                        targetDate.setDate(targetDate.getDate() + 1);

                        if (dayNumber === 5) break;
                    }
                }
                this.insertMeteorology(forecast5Days);
            },
            error: (e) => {
                console.log("An error happened when retrieving the OpenWeather data");
                console.log(JSON.stringify(e));
            }
        });
    }

    insertMeteorology(forecasts) {
        let insertSection = (html) => {
            $("main article:last-child").append("<section></section>");
            $("main article:last-child section:last-child").append(html);
        }

        let insertDay = (forecast) => {
            let forecastDate = new Date(forecast["dt_txt"]);
            let weekday = forecastDate.toLocaleDateString("en-EN", { weekday: "long" });
            weekday = weekday.charAt(0).toUpperCase() + weekday.slice(1); // first day letter upper-case
            let title = "<h3>" + weekday + "</h3>";

            $("main article:last-child").append(title);
        }

        let insertImage = (forecast) => {
            let url = "https://openweathermap.org/img/wn/"
                + forecast["weather"][0]["icon"] + "@2x.png";
            let alt = "Icono del tiempo"; //retrieves the images from the api 
            // according to each weather type

            $("main article:last-child").append("<img>");
            $("main article:last-child img").attr("src", url);
            $("main article:last-child img").attr("alt", alt);
        }

        for (let forecast of forecasts) {

            $("main").append("<article></article>");

            insertDay(forecast);
            insertImage(forecast);

            let maxTempHTML = "<h4>Max Temp: " + forecast["main"]["temp_max"] + "º</h4>";
            insertSection(maxTempHTML);

            let minTempHTML = "<h4>Min Temp: " + forecast["main"]["temp_min"] + "º</h4>";
            insertSection(minTempHTML);

            let rainAmount;
            try {
                rainAmount = parseFloat(forecast["rain"]["3h"]);
            } catch (error) {
                rainAmount = "0";
            }
            let rainAmountHTML = "<h4>Rain: " + rainAmount + "mm</h4>";
            insertSection(rainAmountHTML);

            let humedadHTML = "<h4>Humidity: " + forecast["main"]["humidity"] + "%</h4>";
            insertSection(humedadHTML);

            let vientoHTML = "<h4>Wind: " + forecast["wind"]["speed"] + "km/h</h4>";
            insertSection(vientoHTML);
        }
    }
}

$(document).ready(() => {
    new Meteorology();
});