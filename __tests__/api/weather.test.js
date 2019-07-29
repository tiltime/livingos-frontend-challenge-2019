import mockAxios from 'axios'
import { getCityHourlyWeather, getCityWeatherById, getCityWeatherByName } from '../../api/weather'

const mockData = {
    city : {
        id: 2643743,
        name: 'London',
        main: {
            temp: expect.any(Number),
            temp_max: expect.any(Number),
            temp_min: expect.any(Number)
        }
    },
    hourly: [{},{},{},{},{},{}]
}

test('Get city data by id', async () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: mockData.city })
    )
    const { data }  = await getCityWeatherById(mockData.city.id)
    expect(data.name).toBe(mockData.city.name)
    expect(data.main).toMatchObject(mockData.city.main)
})

test('Get city data by name', async () =>{
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: mockData.city })
    )
    const { data }  = await getCityWeatherByName(mockData.city.name)
    expect(data.name).toBe(mockData.city.name)
    expect(data.main).toMatchObject(mockData.city.main)
})

test('Get hourly weather data', async () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({ data: mockData })
    )
    const { data }  = await getCityHourlyWeather(mockData.city.id)
    expect(data.city.name).toBe(mockData.city.name)
    expect(data.hourly.length).toBe(6)
})
