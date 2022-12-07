import styled from "styled-components";


export const HomeContainer = styled.div`

    padding-top: 11.7rem;
    display: flex;
    align-items: center;
    justify-content: space-between;



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

export const Presentation = styled.div`

    position: relative;

    h1 {
        font-size: 4.8rem;
        line-height: 7.1rem;
    }

    span {
        font-size: 3.2rem;
        line-height: 4.7rem;
    }

    span, h1 {
        font-family: 'Space Mono', sans-serif;
    }

    p {
        width: 43.2rem;
        font-weight: 400;
        font-size: 1.6rem;
        color: ${props => props.theme["gray-100"]};
        margin-top: 2.4rem;
    }

   button {
    width: 17.6rem;
    height: 4.8rem;
    border-radius: 3.5rem;
    border: 2px solid  ${props => props.theme["yellow-500"]};
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme["gray-100"]};
    font-size: 1.6rem;
    margin: 5.6rem 0 9rem;
    cursor: pointer;

    p {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;
    }

    &:hover {
        transition: all 200ms ease;
        background: ${props => props.theme["yellow-500"]};
    }
}
`

export const SocialMedias = styled.div`

display: flex;
align-items: center;
gap: 4rem;
padding: 8rem 0 0 4rem;

a {
    color: ${props => props.theme["gray-100"]};
    cursor: pointer;
    transition: all 200ms ease;
    &:hover {
        color: ${props => props.theme["yellow-500"]};
    }
}


`
