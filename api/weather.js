import axios from 'axios'

const APP_ID = '7ee2d8e6706dc28e3c12e760a6d04d9f' //FIX move to ENV later
const api = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/`
})

export const getCityHourlyWeather = (id) => {
    return api.get('forecast', {
        params: {
            APPID: APP_ID,
            id: id,
        }
    })
}
export const getCityWeatherById = (id) => {
    return api.get('weather', {
        params: {
            APPID: APP_ID, 
            id: id,
    }})
}
export const getCityWeatherByName = (name) => {
    let q = name.replace(/\s+/g, '')
    return api.get('weather', {
        params: {
            APPID: APP_ID, 
            q: q,
    }})
}
