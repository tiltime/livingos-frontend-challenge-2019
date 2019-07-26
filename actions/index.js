import { getCityTemperature } from '../api/weather'
export const ADD_CITY_SUCCESS = 'ADD_CITY_SUCCESS'
export const ADD_CITY_FAILURE = 'ADD_CITY_FAILURE'

// ACTIONS

export const addCity = (city) => async dispatch => {
    try {
        const { data } = await getCityTemperature(city)
        dispatch({ type: ADD_CITY_SUCCESS, data })
    } catch (err) {
        console.log(err.msg)
        dispatch({ type: ADD_CITY_FAILURE, err })
    }
    
}