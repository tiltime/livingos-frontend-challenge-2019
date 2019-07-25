import { ADD_CITY } from '../actions/'
import _ from 'lodash'

const initialState = {
  cities: []
}

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_CITY:
          return {
            ...state,
            cities: [...state.cities, action.city]
          }
      default:
          return state
  }
}

export default cityReducer