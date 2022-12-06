import styled from "styled-components";


export const Container = styled.div`
    max-width: 40rem;

`
export const ImgContainer = styled.div`
            width: 40rem;
            height: 19.3rem;
            background: ${props => props.theme.blueTransparent};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: .2rem;
            margin-bottom: .6rem;
`

export const ProjectLinks =  styled.div`
max-width: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 4rem;
        width: 20rem;
        border: none;
        background: transparent;
        cursor: pointer;
        
        div {
            height: 3.2rem;
            width: 19.2rem;
            display: flex;
            align-items: center;
            background: ${props => props.theme["purple-500"]};
            font-size: 1.6rem;
            color: ${props => props.theme["gray-100"]};
            border-radius: .3rem;
            padding-inline: 1.2rem;

            span {
                margin-left: 2.8rem;
            }
        }
        &:hover {
            transition: all 300ms ease;
            border: 1px solid ${props => props.theme["purple-500"]};
            border-radius: .3rem;
        }
    }

`