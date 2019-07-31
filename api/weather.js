import axios from 'axios'

const APP_ID = process.env.WEATHER_APP_ID
const api = axios.create({
    baseURL: process.env.WEATHER_API_URL
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
