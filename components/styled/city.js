import styled from 'styled-components'

export const ButtonDelete = styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    left: 15px;
    margin-top: -15px
`
export const CityHeader = styled.h3`
    margin-left: 50px;
    font-size: 1.4em;
`
export const CityItem = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-top: 0 none;
    position: relative;
    &:first-child {
        border-top: 1px solid #ccc;
    }
`
export const TempItem = styled.span`
    width: 70px;
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
