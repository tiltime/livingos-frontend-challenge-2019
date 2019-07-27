import React from 'react'
import { connect } from 'react-redux'
import { fetchCityWeather } from '../actions'

import { Wrapper } from '../components/layout'
import CityDetail from '../components/city-detail'

class City extends React.Component {
    static async getInitialProps ({ reduxStore, query }) {
        reduxStore.dispatch(fetchCityWeather(query.id))
        return {}
    }

    render () {
        const city = this.props.city
        console.log(city)
        return (
            <Wrapper>
                <CityDetail data={city}/>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const { city } = state
    return { city }
}

const mapDispatchToProps = { fetchCityWeather }

export default connect(mapStateToProps, mapDispatchToProps)(City)
