import { combineReducers } from 'redux'
import cityListReducer from './cityList'
import cityReducer from './city';

export default combineReducers({
    cityList: cityListReducer,
    city: cityReducer
})