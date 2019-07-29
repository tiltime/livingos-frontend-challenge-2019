import { getCityHourlyWeather, getCityWeatherById, getCityWeatherByName } from '../../api/weather'

const city = {
    id: 2643743,
    name: 'London',
    main: {
        temp: expect.any(Number),
        temp_max: expect.any(Number),
        temp_min: expect.any(Number)
    }
} 

test('Get city data by id', async () => {
    const { data }  = await getCityWeatherById(city.id)
    expect(data.name).toBe(city.name)
    expect(data.main).toMatchObject(city.main)
})

test('Get city data by name', async () =>{
    const { data }  = await getCityWeatherByName(city.name)
    expect(data.name).toBe(city.name)
    expect(data.main).toMatchObject(city.main)
})

test('Get hourly weather data', async () => {
    const { data }  = await getCityHourlyWeather(city.id)
    expect(data.city.name).toBe(city.name)
    expect(data.list.length).toBe(40)
})
