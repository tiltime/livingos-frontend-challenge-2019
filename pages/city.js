import React from 'react'
import { connect } from 'react-redux'
import { fetchCityWeather } from '../actions'

import { Wrapper } from '../components/layout'
import CityDetail from '../components/city-detail'

class City extends React.Component {
    static async getInitialProps ({ reduxStore, query }) {
        await reduxStore.dispatch(fetchCityWeather(query.id))
        return {}
    }

    render () {
        const data = this.props.cityData
        const units = this.props.units
        return (
            <Wrapper>
                <CityDetail data={data} units={units}/>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => {
    const { cityData, units } = state
    return { cityData, units }
}

const mapDispatchToProps = { fetchCityWeather }

export default connect(mapStateToProps, mapDispatchToProps)(City)
