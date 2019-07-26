import { ADD_CITY_SUCCESS } from '../actions/'

const cityReducer = (state = {}, action) => {
  switch (action.type) {
      case ADD_CITY_SUCCESS:
          return [
              ...state, 
              action.data
          ]
      default:
          return state
  }
}

export default cityReducer