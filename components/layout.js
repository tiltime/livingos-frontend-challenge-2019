import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-top: 5px;
    width: 600px;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const AutocompleteWrap = styled.div`
    position: relative;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
    border: honeydew;
    border-radius: 2px;
    display: block;
    margin-bottom: 5px;
`
export const InputBox = styled.input`
    border: 0 none;
    display: block;
    padding: 10px;
    font-size: 16px;
    outline: none;
    width: 90%;
`
export const AutocompleteItemsContainner = styled.div`
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    z-index: 99;
    top: 100%;
    left: 0;
    right: 0;
`
export const AutocompleteItems = styled.div`
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
    &:hover {
        background-color: #e9e9e9;
    }
`
export const BackButton = styled.a`
    position: absolute;
    top: 5px;
    right: 10px;
    color: #717171;
    font-size: 1.5em;
    &:hover {
        opacity: 0.7;
    }
`
export const CityItem = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-top: 0 none;
    position: relative;
`
export const TempItem = styled.span`
    width: 50px;
    height: 28px;
    position: absolute;
    top: 50%;
    margin-top: -14px;
    right: 90px;
    font-size: 20px;
`
export const TempImg = styled.img`
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    margin-top: -25px;
    right: 10px;
`
export const ButtonDelete = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -15px
`
export const Container = styled.div`
    margin: 30px 0;
`
export const CityHeader = styled.h3`
    margin-left: 50px;
    font-size: 1.4em;
`
export const HourlyWeatherItem = styled.div`
    display: inline-block;
    text-align: center;
    width: 16%;
`
export const HourlyDate = styled.span`
    font-size: 0.85em;
`
export const WeatherDetail = styled.div`
    width: 100%;
    position: relative;
`
export const ImgContainer = styled.div`
    text-align: center;
`
export const WeatherDetailHeader = styled.h1`
    font-weight: bold;
    line-height: 1.5;
`
export const WeatherDetailDate = styled.span`
    font-weight: bold;
    font-size: 1.1em;
    line-height: 1.5;
`
export const WeatherDetailCaption = styled.div`
    font-size: 0.85em;
    color: #717171;
`
export const WeatherDetailTemp = styled.div`
    font-size: 5em;
    font-weight: bold;
    text-align: center;
`
export const WeatherDetailCondition = styled.div`
    font-size: 1.25em;
    text-align: center;
    padding-top: 8px;
`
export const WeatherSubHeader = styled.h5`
    font-size: 0.85em;
    color: #717171;
    margin-bottom: 20px;  
    text-transform: uppercase;  
`
export const HourlyTemp = styled.span`
    font-size: 1.1em;
    font-weight: bold;
`
export const ColumnHalf = styled.div`
    width: 50%;
    display: inline-block;
    color: #717171;
`