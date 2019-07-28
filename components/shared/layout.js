import styled from 'styled-components'

export const Wrapper = styled.div`
    padding-top: 5px;
    width: 600px;
    margin: 0 auto;
    position: relative;
    @media (max-width: 768px) {
        width: 100%;
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
export const Container = styled.div`
    margin: 30px 0;
`
export const ImgContainer = styled.div`
    text-align: center;
`
export const ColumnHalf = styled.div`
    width: 50%;
    display: inline-block;
    color: #717171;
`
export const DropDownContainer = styled.div`
    width: 120px;
    margin: 10px 0;
    @media (max-width: 768px) {
        width: 100%;
    }
`