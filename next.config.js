// next.config.js
const withPlugins = require('next-compose-plugins')
const withCSS = require('@zeit/next-css')

const nextConfig = {
    env: {
        WEATHER_API_URL: 'http://api.openweathermap.org/data/2.5/',
        WEATHER_APP_ID: '7ee2d8e6706dc28e3c12e760a6d04d9f'
    }
}
   
module.exports = withPlugins([
    withCSS()
], nextConfig);
