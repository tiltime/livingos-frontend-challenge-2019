import moment from 'moment-timezone'
import { tempConverter } from '../utils'

import { HourlyWeatherItem, WeatherDetailHeader, WeatherDetailDate, WeatherDetail, 
    ImgContainer, WeatherDetailCaption, WeatherDetailTemp, WeatherDetailCondition, 
    WeatherSubHeader, BackButton, Container, HourlyDate, ColumnHalf } from '../components/layout'

moment.tz.setDefault("Asia/Bangkok")

import { Link } from '../routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const CityDetail = ({ data, units }) => {
    if(!data) return(<div>No Information found</div>)
    const chanceOfRain = data.city.rain? data.city.rain['rain.1h'] : 0
    return (
        <div>
            <WeatherDetail>
                <BackButton>
                    <Link route="/">
                        <FontAwesomeIcon icon={faArrowLeft} size="1x"/>
                    </Link>
                </BackButton>
                <WeatherDetailHeader>{data.city.name}</WeatherDetailHeader>
                <WeatherDetailDate>{moment().format('dddd, D MMMM YYYY')}</WeatherDetailDate>
                <WeatherDetailCaption><span>Max:{tempConverter(data.city.main.temp_max, units)}/Min:{tempConverter(data.city.main.temp_min, units)}</span></WeatherDetailCaption>
                <ImgContainer><img src={`http://openweathermap.org/img/wn/${data.city.weather[0].icon}@2x.png`}/></ImgContainer>
                <WeatherDetailTemp><span>{tempConverter(data.city.main.temp, units)} </span></WeatherDetailTemp>
                <WeatherDetailCondition>{data.city.weather[0].main}</WeatherDetailCondition>
            </WeatherDetail>
            <Container>
                <WeatherSubHeader>24 HOURS FORCAST</WeatherSubHeader>
                {data.hourly.map((item, i) =>{
                    return(
                        <HourlyWeatherItem key={i}>
                            <HourlyDate>{moment(item.dt_txt).format('h a')}</HourlyDate>
                            <div><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img></div>
                            <div>{tempConverter(item.main.temp, units)}</div>
                        </HourlyWeatherItem>
                    )
                })}
            </Container>    
            <Container>
                <WeatherSubHeader>Current Details</WeatherSubHeader>
                <ColumnHalf>Humidity</ColumnHalf><ColumnHalf>{data.city.main.humidity}</ColumnHalf>
                <ColumnHalf>Wind</ColumnHalf><ColumnHalf>{data.city.wind.speed}</ColumnHalf>
                <ColumnHalf>Pressure</ColumnHalf><ColumnHalf>{data.city.main.pressure}</ColumnHalf>
                <ColumnHalf>Chance of rain</ColumnHalf><ColumnHalf>{chanceOfRain}</ColumnHalf>
            </Container>
        </div>
    )
}

export default CityDetail