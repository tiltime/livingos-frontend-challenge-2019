import React from 'react'
import HEAD from 'next/head'
import { connect } from 'react-redux'

import LocationSearchInput from '../components/location-search-input'

class Index extends React.Component {
  static getInitialProps ({ reduxStore, req }) {

    return {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <div className="wrapper">
        <HEAD>
          <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7RLMtF1G68gTSD-KvCrHcLdzWw44kyec&libraries=places"></script>
        </HEAD>
        <LocationSearchInput/>
        {/* <CityList/> */}
      </div>
    )
  }
}
const mapDispatchToProps = { }
export default connect(
  null,
  mapDispatchToProps
)(Index)
