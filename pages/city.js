import React from 'react'
import { connect } from 'react-redux'
import { fetchCityWeather } from '../actions/'

import { Wrapper } from '../components/layout'

class City extends React.Component {
    static async getInitialProps ({ reduxStore, query }) {
        reduxStore.dispatch(fetchCityWeather(query.id))
        return {}
    }

    render () {
        const city = this.props.city
        return (
            <Wrapper>
                <CityDetail city={city}/>
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
