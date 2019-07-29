import cityListReducer from '../../reducers/cityList'
import { ADD_CITY_SUCCESS, REMOVE_CITY } from '../../actions/city-weather'

const city = {
    id: 2643743,
    name: 'London',
    main: {
        temp: 256,
        temp_max: 278,
        temp_min: 250
    }
}

const cityList = [
    {
        id: 2643786,
        name: 'Bangkok',
        main: {
            temp: 266,
            temp_max: 279,
            temp_min: 260
        }
    },
    {
        id: 2643743,
        name: 'London',
        main: {
            temp: 256,
            temp_max: 278,
            temp_min: 250
        }
    },
    
]

describe('Test cityList reducer', () => {
    it('should return the initial state', () => {
        expect(cityListReducer(undefined, [])).toEqual([])
    })

    it('should handle ADD_CITY_SUCCESS', () => {
        expect(
            cityListReducer([], {
                type: ADD_CITY_SUCCESS,
                data: city
            })
        ).toEqual(
            [{
                id: 2643743,
                name: 'London',
                main: {
                    temp: 256,
                    temp_max: 278,
                    temp_min: 250
                }
            }]
        )
    })

    it('should handle REMOVE_CITY', () => {
        expect(
            cityListReducer(cityList, {
                type: REMOVE_CITY,
                data: city
            })
        ).toEqual(
            [{
                id: 2643786,
                name: 'Bangkok',
                main: {
                    temp: 266,
                    temp_max: 279,
                    temp_min: 260
                }
            }]
        )
    })
})
