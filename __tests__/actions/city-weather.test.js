import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import mockAxios from 'axios'
import { addCity, ADD_CITY_SUCCESS, removeCity, REMOVE_CITY, FETCH_CITY_WEATHER_SUCCESS, fetchCityWeather } from '../../actions/city-weather'
import mockCity from '../../mock/city'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const id = 2643743
const name = 'London'
const mockData = {
    city : {
        id: 2643743,
        name: 'London',
        main: {
            temp: expect.any(Number),
            temp_max: expect.any(Number),
            temp_min: expect.any(Number)
        }
    },
    hourly: [{},{},{},{},{},{},{}]
}

describe('async actions', () => {
    it('creates ADD_CITY_SUCCESS when fetching city weather data has been done', () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: mockCity })
        )
        
        const expectedActions = [
            { type: ADD_CITY_SUCCESS, data: mockCity }
        ]
        const store = mockStore({ data: {} })

        return store.dispatch(addCity(name)).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

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