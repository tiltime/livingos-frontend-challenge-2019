import moment from 'moment-timezone'

import { HourlyWeatherItem, WeatherDetailHeader, WeatherDetailDate, WeatherDetail, ImgContainer, WeatherDetailCaption, WeatherDetailTemp, WeatherDetailCondition } from '../components/layout'

moment.tz.setDefault("Asia/Bangkok")

const CityDetail = ({ data }) => {
    console.log(data)
    if(!data) return(<div>No Information found</div>)
    const chanceOfRain = data.city.rain? data.city.rain['rain.1h'] : 0
    const currentTemp = parseInt(data.city.main.temp)
    return (
        <div>
            <WeatherDetail>
                <WeatherDetailHeader>{data.city.name}</WeatherDetailHeader>
                <WeatherDetailDate>{moment().format('dddd, D MMMM YYYY')}</WeatherDetailDate>
                <WeatherDetailCaption><span>Max:{data.city.main.temp_max}/Min:{data.city.main.temp_min}</span></WeatherDetailCaption>
                <ImgContainer><img src={`http://openweathermap.org/img/wn/${data.city.weather[0].icon}@2x.png`}/></ImgContainer>
                <WeatherDetailTemp><span>{currentTemp} </span></WeatherDetailTemp>
                <WeatherDetailCondition>{data.city.weather[0].main}</WeatherDetailCondition>
            </WeatherDetail>
            <div>
                <h4>24 HOURS FORCAST</h4>
                {data.hourly.map((item, i) =>{
                    return(
                        <HourlyWeatherItem key={i}>
                            <div>{moment(item.dt_txt).format('h a')}</div>
                            <div><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img></div>
                            <div>{item.main.temp}</div>
                        </HourlyWeatherItem>
                    )
                })}
            </div>    
            <div>
                <h4>Current Details</h4>
                <div>Humidity <span>{data.city.main.humidity}</span></div>
                <div>Wind <span>{data.city.wind.speed}</span></div>
                <div>Pressure: <span>{data.city.main.pressure}</span></div>
                <div>Chance of rain: <span>{chanceOfRain}</span></div>
            </div>
        </div>
    )
}

export default CityDetail