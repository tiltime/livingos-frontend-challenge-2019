import { ADD_CITY_SUCCESS, REMOVE_CITY } from '../actions/city-weather'

const cityListReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_CITY_SUCCESS:
            return [
                ...state, 
                action.data
            ]
        case REMOVE_CITY:
            return state.filter(data => data.id !== action.data.id)
        default:
            return state
    }
}

export default cityListReducer