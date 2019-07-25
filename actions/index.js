export const ADD_CITY = 'ADD_CITY'
export const REMOVE_CITY = 'REMOVE_CITY'

// ACTIONS

export const addCity = (city) => dispatch => {
    console.log(city)
    dispatch({ type: ADD_CITY, city })
}