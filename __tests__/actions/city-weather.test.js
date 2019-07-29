import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchCityWeather, FETCH_CITY_WEATHER_SUCCESS, addCity, ADD_CITY_SUCCESS, removeCity, REMOVE_CITY } from '../../actions/city-weather'
import fetchMock from 'fetch-mock'

import mockCity from '../../mock/city'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
    it('should create an action to remove city from list', () => {
      const store = mockStore({ data: {} })
      const expectedAction = [{
        type: REMOVE_CITY,
        data: mockCity
      }]
      store.dispatch(removeCity(mockCity))
      expect(store.getActions()).toEqual(expectedAction)
    })
  })