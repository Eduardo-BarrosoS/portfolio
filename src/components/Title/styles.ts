import styled from "styled-components";

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 11.4rem 0 5.6rem 0;
    span {
        font-weight: 700;
        font-size: 25rem;
        line-height: 20rem;
        color: ${props => props.theme.whiteTransparent};
    }

    h1 {
        position: relative;
        right: 8rem;
        top: 1rem;
    
        font-weight: 700;
        font-size: 6rem;
        line-height: 7rem;
    }

`