import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-top: 5px
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
export const CityHeader = styled.h3`
    margin-left: 50px;
    font-size: 20px;
`