import { useEffect, useState } from "react";

export default function NewYork(){

    const initializedState = {
        Temperature: {
            Minimum: {
                Value: '',
            },
            Maximum: {
                Value: '',
            }
        }
    }

    const [weather, setWeather] = useState(initializedState);
    const today = new Date().toLocaleDateString();

    useEffect(()=>{
        async function loadWeather(){
            const response = await fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/349727?apikey=Ks9YrThJIQNqSUqyTAbEb9zh5YDuWBPW&details=true");
            const weatherFromAPI = await response.json();
            setWeather(weatherFromAPI.DailyForecasts[0]);
        }
        loadWeather();
    }, []);

    console.log(weather);

    return (
        <div className="ny">
        <h3>New York Weather</h3>
        <p>{today}</p>
        <p>Minimum Temperature: {weather.Temperature.Minimum.Value}&#176; F</p>
        <p>Maximum Temperature: {weather.Temperature.Maximum.Value}&#176; F</p>
        </div>
    )
}