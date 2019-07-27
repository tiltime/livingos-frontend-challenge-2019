const CityDetail = ({ data }) => {
    if(!data) return (<div>NO WEATHER INFORMATION</div>)
    return (
        <div>{data.city.name}</div>
    )
}

export default CityDetail