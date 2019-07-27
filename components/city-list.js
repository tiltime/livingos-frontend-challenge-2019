import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { CityItem, TempItem, TempImg, ButtonDelete, CityHeader } from '../components/layout'
const CityList = ({ cities, onDelete }) => {
    if(!cities) return (<div></div>)
    return (
        cities.map((city, i) => {
            return(
                
                <CityItem key={i}>
                        <ButtonDelete onClick={() => onDelete(city)}><FontAwesomeIcon icon={faTrashAlt} size="xs"/></ButtonDelete>
                        <CityHeader>{city.name}</CityHeader>
                        <TempImg src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}></TempImg>
                        <TempItem>{city.main.temp}</TempItem>
                </CityItem>
            )
        })
    )
}

export default CityList