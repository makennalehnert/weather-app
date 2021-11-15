import React, {useState, useEffect} from 'react'
import './Chicago.css'

export default function Chicago(){

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
        async function loadChicago(){
            const response = await fetch("http://dataservice.accuweather.com/forecasts/v1/daily/1day/348308?apikey=Ks9YrThJIQNqSUqyTAbEb9zh5YDuWBPW&details=true")
            const chicagoFromAPI = await response.json();
            setTemp(chicagoFromAPI.DailyForecasts[0].Temperature);
            setDayDescription(chicagoFromAPI.DailyForecasts[0].Day.ShortPhrase)
            setNightDescription(chicagoFromAPI.DailyForecasts[0].Night.ShortPhrase)
            setSnow(chicagoFromAPI.DailyForecasts[0].Day.SnowProbability)
            setRain(chicagoFromAPI.DailyForecasts[0].Day.RainProbability)
        }
        loadChicago();
    }, []);
    
    return (
        <div className='chicago'>
        <h3>Chicago Weather</h3>
        <p>Todays Date: {today}</p>
        <p>Minimum Temperature: {temp.Minimum.Value}&#176; F</p>
        <p>Maximum Temperature: {temp.Maximum.Value}&#176; F</p>
        <p>Day Description: {dayDescription}</p>
        <p>Night Description: {nightDescription}</p>
        <p>Chance of Rain:{rain}%</p>
        <p>Chance of Snow:{snow}%</p>        
        </div>
    )
}