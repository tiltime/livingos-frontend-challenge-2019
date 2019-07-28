import { UPDATE_UNITS_SUCCESS } from '../actions/units'

const unitsReducer = (state = '', action) => {
    switch (action.type) {
        case UPDATE_UNITS_SUCCESS:
            return action.units
        default:
            return state
    }
}

export default unitsReducer