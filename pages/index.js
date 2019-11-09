import React from 'react'
import { connect } from 'react-redux'
import HEAD from 'next/head'
import Select from 'react-select'
import CityList from '../components/city-list'
import LocationSearchInput from '../components/location-search-input'
import { updateUnits } from '../actions/units'
import { removeCity } from '../actions/city-weather'
import { DropDownContainer, Wrapper } from '../components/shared/layout'

const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY

const options = [
    { value: 'K', label: 'K'},
    { value: 'C', label: 'C'}, 
    { value: 'F', label: 'F'}
]

class Index extends React.Component {
    onUpdated = selectedOption => {
        this.props.updateUnits(selectedOption.value)
    }
    render () {
        const mylist = this.props.cityList
        const units = this.props.units
        return (
            <Wrapper>
                <HEAD>
                    <script type="text/javascript" src=`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`></script>
                </HEAD>
                <LocationSearchInput/>
                <CityList cities={mylist} onDelete={this.props.removeCity} units={units}/>
                <DropDownContainer>
                    <Select placeholder={`Units: ${units}`} options={options} onChange={this.onUpdated} value={units} />
                </DropDownContainer>        
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const { cityList, units } = state
    return { cityList, units }
}

const mapDispatchToProps = { removeCity, updateUnits }

export default connect(mapStateToProps, mapDispatchToProps)(Index)
