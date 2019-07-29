import unitsReducer from '../../reducers/units'
import { UPDATE_UNITS_SUCCESS } from '../../actions/units'

describe('Test units reducer', () => {
    it('should return the initial state', () => {
        expect(unitsReducer(undefined, '')).toEqual('')
    })

    it('should handle UPDATE_UNITS_SUCCESS', () => {
        expect(
            unitsReducer('', {
                type: UPDATE_UNITS_SUCCESS,
                units: 'C'
            })
        ).toEqual('C')
        expect(
            unitsReducer('F', {
                type: UPDATE_UNITS_SUCCESS,
                units: 'C'
            })
        ).toEqual('C')
    })
})
