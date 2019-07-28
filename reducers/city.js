import { FETCH_CITY_WEATHER_SUCCESS } from '../actions/city-weather'

const cityReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CITY_WEATHER_SUCCESS:
            return Object.assign(state, action.data)
        default:
            return state
    }
}

export default cityReducer