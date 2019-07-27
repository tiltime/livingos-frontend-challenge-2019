import { Link } from '../routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { CityItem, TempItem, TempImg, ButtonDelete, CityHeader } from '../components/layout'
const CityList = ({ cities, onDelete }) => {
    if(!cities) return (<div></div>)
    return (
        cities.map((city, i) => {
            return(
                <Link route='city' params={{id: city.id}}>
                    <CityItem key={city.id}>
                        <ButtonDelete onClick={() => onDelete(city)}><FontAwesomeIcon icon={faTrashAlt} size="xs"/></ButtonDelete>
                        <CityHeader>{city.name}</CityHeader>
                        <TempImg src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}></TempImg>
                        <TempItem>{city.main.temp}</TempItem>
                    </CityItem>
                </Link>
            )
        })
    )
}

export default CityList