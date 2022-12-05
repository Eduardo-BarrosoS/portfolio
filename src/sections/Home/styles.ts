import styled from "styled-components";


export const HomeContainer = styled.div`

    padding-top: 11.7rem;

span, h1 {
        font-family: 'Space Mono', sans-serif;
    }

`
export const ContainerImg = styled.div`

    position: relative;

    div, img {
        width: 35.8rem;
        height: 43.2rem;
        border-radius: 24px;
    }
    
    div {
        background: ${props => props.theme["yellow-500"]};
    }

    img {
        position: absolute;
        bottom: 32px;
        left: 40px;
        object-fit: cover;
    }
`
