import { getCurrentCityTemperature, getCityWeather } from '../api/weather'

export const ADD_CITY_SUCCESS = 'ADD_CITY_SUCCESS'
export const ADD_CITY_FAILURE = 'ADD_CITY_FAILURE'
export const REMOVE_CITY = 'REMOVE_CITY'
export const FETCH_CITY_WEATHER_SUCCESS = 'FETCH_CITY_WEATHER_SUCCESS'
export const FETCH_CITY_WEATHER_FAILURE = 'FETCH_CITY_WEATHER_FAILURE'
// ACTIONS

export const addCity = (city) => async dispatch => {
    try {
        const { data } = await getCurrentCityTemperature(city)
        dispatch({ type: ADD_CITY_SUCCESS, data })
    } catch (err) {
        console.log(err.msg)
        dispatch({ type: ADD_CITY_FAILURE, err })
    }
    
}

export const removeCity = (data) => async dispatch => {
    dispatch({ type: REMOVE_CITY, data })
}

export const fetchCityWeather = (id) => async dispatch => {
    try {
        const { data } = await getCityWeather(id)
        dispatch({ type: FETCH_CITY_WEATHER_SUCCESS, data })
    } catch (err) {
        console.log(err.msg)
        dispatch({ type: FETCH_CITY_WEATHER_FAILURE, data })
    }
}