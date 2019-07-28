import moment from 'moment-timezone'

import { HourlyWeatherItem, WeatherDetailHeader, WeatherDetailDate, WeatherDetail, 
    ImgContainer, WeatherDetailCaption, WeatherDetailTemp, WeatherDetailCondition, WeatherSubHeader, BackButton, Container } from '../components/layout'

moment.tz.setDefault("Asia/Bangkok")

import { Link } from '../routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CityDetail = ({ data }) => {
    if(!data) return(<div>No Information found</div>)
    const chanceOfRain = data.city.rain? data.city.rain['rain.1h'] : 0
    return (
        <div>
            <WeatherDetail>
                <BackButton>
                    <Link route="/">
                        <FontAwesomeIcon icon={faArrowLeft} size="s"/>
                    </Link>
                </BackButton>
                <WeatherDetailHeader>{data.city.name}</WeatherDetailHeader>
                <WeatherDetailDate>{moment().format('dddd, D MMMM YYYY')}</WeatherDetailDate>
                <WeatherDetailCaption><span>Max:{parseInt(data.city.main.temp_max)}/Min:{parseInt(data.city.main.temp_min)}</span></WeatherDetailCaption>
                <ImgContainer><img src={`http://openweathermap.org/img/wn/${data.city.weather[0].icon}@2x.png`}/></ImgContainer>
                <WeatherDetailTemp><span>{parseInt(data.city.main.temp)} </span></WeatherDetailTemp>
                <WeatherDetailCondition>{data.city.weather[0].main}</WeatherDetailCondition>
            </WeatherDetail>
            <Container>
                <WeatherSubHeader>24 HOURS FORCAST</WeatherSubHeader>
                {data.hourly.map((item, i) =>{
                    return(
                        <HourlyWeatherItem key={i}>
                            <div>{moment(item.dt_txt).format('h a')}</div>
                            <div><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img></div>
                            <div>{parseInt(item.main.temp)}</div>
                        </HourlyWeatherItem>
                    )
                })}
            </Container>    
            <Container>
                <WeatherSubHeader>Current Details</WeatherSubHeader>
                <div>Humidity <span>{data.city.main.humidity}</span></div>
                <div>Wind <span>{data.city.wind.speed}</span></div>
                <div>Pressure: <span>{data.city.main.pressure}</span></div>
                <div>Chance of rain: <span>{chanceOfRain}</span></div>
            </Container>
        </div>
    )
}

export default CityDetail