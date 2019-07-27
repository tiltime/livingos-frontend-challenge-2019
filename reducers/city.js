import { FETCH_CITY_WEATHER_SUCCESS } from '../actions/index'

const cityReducer = (state = {}, action) => {
  switch (action.type) {
      case FETCH_CITY_WEATHER_SUCCESS:
          return action.data
      default:
          return state
  }
}

export default cityReducer