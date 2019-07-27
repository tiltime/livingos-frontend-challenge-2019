import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './reducers/'

const initialState = {
    cityList: [],
    city: {}
}

const persistConfig = {
    key: 'primary',
    storage,
    whitelist: ['cityList']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function initializeStore (newInitialState = initialState) {
    return createStore(
        persistedReducer,
        newInitialState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}
