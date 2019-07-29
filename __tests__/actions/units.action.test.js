import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { UPDATE_UNITS_SUCCESS, updateUnits } from '../../actions/units'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action to change temperature units', () => {
    const store = mockStore({ units: '' })
    const units = 'F'
    const expectedAction = [{
      type: UPDATE_UNITS_SUCCESS,
      units
    }]
    store.dispatch(updateUnits(units))
    expect(store.getActions()).toEqual(expectedAction)
  })
})