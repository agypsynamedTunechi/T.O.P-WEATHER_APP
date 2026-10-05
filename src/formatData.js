export async function formatData(virtual) {
try {
    const data =  await virtual;

    return console.log({
        address: data.address,
        currentTemp: data.currentConditions.temp,
        currentFeelsLike: data.currentConditions.feelslike,
        currentWeatherConditions: data.currentConditions.conditions,
        currentIcon: data.currentConditions.icon,
        currentHumidity: data.currentConditions.humidity,
        currentWindSpeed: data.currentConditions.windspeed,
        currentWindDirection: data.currentConditions.winddir,
        currentPressure: data.currentConditions.pressure,
        currentVisibility: data.currentConditions.visibility,
        forecast: [
            {
                forecastDate: data.days[0].datetime,
                forecastTemp: data.days[0].temp,
                forecastWeatherConditions: data.days[0].conditions,
                forecastIcon: data.days[0].icon,
            },
            {
                forecastDate: data.days[1].datetime,
                forecastTemp: data.days[1].temp,
                forecastWeatherConditions: data.days[1].conditions,
                forecastIcon: data.days[1].icon,
            },
            {
                forecastDate: data.days[2].datetime,
                forecastTemp: data.days[2].temp,
                forecastWeatherConditions: data.days[2].conditions,
                forecastIcon: data.days[2].icon,
            },
            {
                forecastDate: data.days[3].datetime,
                forecastTemp: data.days[3].temp,
                forecastWeatherConditions: data.days[3].conditions,
                forecastIcon: data.days[3].icon,
            },
            {
                forecastDate: data.days[4].datetime,
                forecastTemp: data.days[4].temp,
                forecastWeatherConditions: data.days[4].conditions,
                forecastIcon: data.days[4].icon,
            },
            {
                forecastDate: data.days[5].datetime,
                forecastTemp: data.days[5].temp,
                forecastWeatherConditions: data.days[5].conditions,
                forecastIcon: data.days[5].icon,
            },
            {
                forecastDate: data.days[6].datetime,
                forecastTemp: data.days[6].temp,
                forecastWeatherConditions: data.days[6].conditions,
                forecastIcon: data.days[6].icon,
            },  
        ]
    });
} catch (error) {
    console.error("Error formatting data:", error);
}
}