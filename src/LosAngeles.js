import React, {useState, useEffect} from 'react';
import './LosAngeles.css'

export default function LosAngeles(){

 const initializedStateTemperature={
        Minimum: {
            Value:''
        },
        Maximum: {
            Value:''
        }
    } 
   
    const [temp, setTemp] = useState(initializedStateTemperature);
    const [dayDescription, setDayDescription] = useState('');
    const [nightDescription, setNightDescription] = useState('');
    const [snow, setSnow] = useState('');
    const [rain, setRain] = useState('');
    let today = new Date().toLocaleDateString();

    useEffect(() => {
        async function loadWeather(){
            const response = await fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/347625?apikey=Ks9YrThJIQNqSUqyTAbEb9zh5YDuWBPW&details=true")
            const weatherFromAPI = await response.json();
            setTemp(weatherFromAPI.DailyForecasts[0].Temperature);
            setDayDescription(weatherFromAPI.DailyForecasts[0].Day.ShortPhrase)
            setNightDescription(weatherFromAPI.DailyForecasts[0].Night.ShortPhrase)
            setSnow(weatherFromAPI.DailyForecasts[0].Day.SnowProbability)
            setRain(weatherFromAPI.DailyForecasts[0].Day.RainProbability)
        }
        loadWeather();
    }, []);
    

    
    return (
    <div className="la">
        <h3>Los Angeles Weather</h3>
        <p>Todays Date: {today}</p>
        <p>Maximum Temperature: {temp.Maximum.Value}&#176; F</p>
        <p>Minimum Temperature: {temp.Minimum.Value}&#176; F</p>
        <p>Day Description: {dayDescription}</p>
        <p>Night Description: {nightDescription}</p>
        <p>Chance of Rain:{rain}%</p>
        <p>Chance of Snow:{snow}%</p>
    </div>
    )

}