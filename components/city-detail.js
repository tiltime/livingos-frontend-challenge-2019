import moment from 'moment-timezone'
moment.tz.setDefault("Asia/Bangkok")

const CityDetail = ({ data }) => {
    console.log(data)
    if(!data) return(<div>No Information found</div>)
    const chanceOfRain = data.city.rain? data.city.rain['rain.1h'] : 0
    return (
        <div>
            <div>
                <h3>{data.city.name}</h3>
                <span>{moment().format('dddd, D MMMM YYYY')}</span>
                <div><span>Max:{data.city.main.temp_max}/Min:{data.city.main.temp_min}</span></div>
                <div><img src={`http://openweathermap.org/img/wn/${data.city.weather[0].icon}@2x.png`}></img></div>
                <div><span>Current: {data.city.main.temp}</span></div>
                <div>{data.city.weather[0].main}</div>
            </div>
            <div>
                <h4>24 HOURS FORCAST</h4>
                {data.hourly.map((item, i) =>{
                    return(
                        <div key={i}>
                            <div>{moment(item.dt_txt).format('h a')}</div>
                            <div><img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}></img></div>
                            <div>{item.main.temp}</div>
                        </div>
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