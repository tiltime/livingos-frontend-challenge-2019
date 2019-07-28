export const UPDATE_UNITS_SUCCESS = 'UPDATE_UNITS_SUCCESS'

export const updateUnits = (units) => dispatch => {
    dispatch({ type: UPDATE_UNITS_SUCCESS, units })
}