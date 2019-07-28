import tuc from 'temp-units-conv'

export const tempConverter = (temp, units) => {
    let stringTemp = ''
    if(units === 'F') {
        stringTemp = parseInt(tuc.k2f(temp)) + ' F' 
    } 
    else if(units === 'C') {
        stringTemp = parseInt(tuc.k2c(temp)) + ' C'
    } else 
    stringTemp = parseInt(temp) + ' K'
    return stringTemp
}