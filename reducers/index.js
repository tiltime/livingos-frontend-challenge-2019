import { combineReducers } from 'redux'
import cityListReducer from './cityList'
import cityReducer from './city';
import unitsReducer from './units';

export default combineReducers({
    cityList: cityListReducer,
    cityData: cityReducer,
    units: unitsReducer
})