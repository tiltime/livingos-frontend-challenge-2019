import { ADD_CITY_SUCCESS, REMOVE_CITY } from '../actions'

const cityListReducer = (state = [], action) => {
  switch (action.type) {
      case ADD_CITY_SUCCESS:
          return [
              ...state, 
              action.data
          ]
      case REMOVE_CITY:
          return state.filter(data => data !== action.data)
      default:
          return state
  }
}

export default cityListReducer