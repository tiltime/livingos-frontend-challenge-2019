import React from 'react'
import { connect } from 'react-redux'
import HEAD from 'next/head'
import CityList from '../components/city-list'
import LocationSearchInput from '../components/location-search-input'

class Index extends React.Component {
    render () {
        const mylist = this.props.cities
        return (
            <div className="wrapper">
                <HEAD>
                    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7RLMtF1G68gTSD-KvCrHcLdzWw44kyec&libraries=places"></script>
                </HEAD>
                <LocationSearchInput/>
                <CityList cities={mylist}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { cities } = state
    return { cities }
}

export default connect(mapStateToProps, null)(Index)
