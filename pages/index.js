import React from 'react'
import { connect } from 'react-redux'
import HEAD from 'next/head'
import CityList from '../components/city-list'
import LocationSearchInput from '../components/location-search-input'
import { removeCity } from '../actions/'

import { Wrapper } from '../components/layout'

class Index extends React.Component {
    render () {
        const mylist = this.props.cityList
        return (
            <Wrapper>
                <HEAD>
                    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7RLMtF1G68gTSD-KvCrHcLdzWw44kyec&libraries=places"></script>
                </HEAD>
                <LocationSearchInput/>
                <CityList cities={mylist} onDelete={this.props.removeCity}/>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const { cityList } = state
    return { cityList }
}

const mapDispatchToProps = { removeCity }

export default connect(mapStateToProps, mapDispatchToProps)(Index)
