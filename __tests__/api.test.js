import { getHourlyWeather, getCurrentCityWeather, getCityWeather } from '../api/weather'

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
    const { data }  = await getCityWeather(city.id)
    expect(data.name).toBe(city.name)
    expect(data.main).toMatchObject(city.main)
    
})

test('Get current city data by name', async () =>{
    const { data }  = await getCurrentCityWeather(city.name)
    expect(data.name).toBe(city.name)
    expect(data.main).toMatchObject(city.main)
})

test('Get hourly weather data', async () => {
    const { data }  = await getHourlyWeather(city.id)
    expect(data.city.name).toBe(city.name)
    expect(data.list.length).toBe(40)
})
