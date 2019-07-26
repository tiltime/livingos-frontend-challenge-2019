const CityList = ({ cities }) => {
    if(!cities) return (<div></div>)
    return (
        cities.map((city, i) => {
            return(
                <div key={i} className="city item">
                    {city.name}
                </div>
            )
        })
    )
}
export default CityList