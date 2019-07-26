const CityList = ({ cities, onDelete }) => {
    if(!cities) return (<div></div>)
    return (
        cities.map((city, i) => {
            return(
                <div key={city.id} className="city item">
                    <h3>{city.name}</h3>
                    <button onClick={() => onDelete(city)}>delete</button>
                </div>
            )
        })
    )
}

export default CityList