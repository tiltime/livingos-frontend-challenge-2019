import cityReducer from '../../reducers/city'
import { FETCH_CITY_WEATHER_SUCCESS } from '../../actions/city-weather'

const city = {
    id: 2643743,
    name: 'London',
    main: {
        temp: 256,
        temp_max: 278,
        temp_min: 250
    }
} 

describe('Test city reducer', () => {
    it('should return the initial state', () => {
        expect(cityReducer(undefined, {})).toEqual({})
    })

    it('should handle FETCH_CITY_WEATHER_SUCCESS', () => {
        expect(
            cityReducer({}, {
                type: FETCH_CITY_WEATHER_SUCCESS,
                data: city
            })
        ).toEqual(
            {
                id: 2643743,
                name: 'London',
                main: {
                    temp: expect.any(Number),
                    temp_max: expect.any(Number),
                    temp_min: expect.any(Number)
                }
            }
        )
    })
})
