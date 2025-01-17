import { getCityHourlyWeather, getCityWeatherByName, getCityWeatherById } from '../api/weather'

export const ADD_CITY_SUCCESS = 'ADD_CITY_SUCCESS'
export const ADD_CITY_FAILURE = 'ADD_CITY_FAILURE'
export const REMOVE_CITY = 'REMOVE_CITY'
export const FETCH_CITY_WEATHER_SUCCESS = 'FETCH_CITY_WEATHER_SUCCESS'
export const FETCH_CITY_WEATHER_FAILURE = 'FETCH_CITY_WEATHER_FAILURE'

export const addCity = (cityname) => async dispatch => {
    try {
        const { data } = await getCityWeatherByName(cityname)
        dispatch({ type: ADD_CITY_SUCCESS, data })
    } catch (err) {
        console.log(err.msg)
        dispatch({ type: ADD_CITY_FAILURE, err })
    }
    
}
export const removeCity = (data) => dispatch => {
    dispatch({ type: REMOVE_CITY, data })
}
export const fetchCityWeather = (id) => async dispatch => {
    try {
        const current = await getCityWeatherById(id)
        const hourly =  await getCityHourlyWeather(id)
        const data = { city: current.data, hourly: hourly.data.list.slice(0, 6)}
        dispatch({ type: FETCH_CITY_WEATHER_SUCCESS, data })
    } catch (err) {
        console.log(err.msg)
        dispatch({ type: FETCH_CITY_WEATHER_FAILURE, err })
    }
}