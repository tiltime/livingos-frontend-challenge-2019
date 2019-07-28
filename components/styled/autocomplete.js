import styled from 'styled-components'

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