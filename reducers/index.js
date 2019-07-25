import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cityReducer from './city'

const persistConfig = {
    key: 'primary',
    storage,
    whitelist: ['cities']
}

export default combineReducers({
    cities: persistReducer(persistConfig, cityReducer)
})