import axios from 'axios'

const APP_ID = '7ee2d8e6706dc28e3c12e760a6d04d9f'

const api = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/`
})

export const getCityTemperature = (cityname) => {
    let q = cityname.replace(/\s+/g, '')
    return api.get('weather', {
        params: {
            APPID: APP_ID, 
            q: q
    }})
}