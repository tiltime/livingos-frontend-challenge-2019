import React from 'react'
import renderer from 'react-test-renderer'

import CityList from '../components/city-list'
import CityDetail from "../components/city-detail";
import MockCity from '../mock/city'
import MockCities from '../mock/cities'

const units = 'C'

describe('With Snapshot Testing', () => {
    it('Render CityItem', () => {
        const component = renderer.create(<CityList cities={MockCities} units={units} />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('Render CityDetail', () => {
        const component = renderer.create(<CityDetail data={MockCity} units={units}/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
