import styled from "styled-components";

export const AboutMeContainer = styled.div`
    h3 {
        color: ${props => props.theme["gray-100"]};
        font-weight: 500;
        font-size: 3.6rem;
        margin-bottom: 4rem;
    }
    button {
        width: 16rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 3.5rem;
        margin-top: 4rem;
        background: ${props => props.theme["yellow-500"]};
        color: ${props => props.theme["gray-100"]};
        font-size: 1.4rem;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            transition: all 300ms ease;
            scale: 1.05;
        }
    }
`
export const PersonalInformationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
export const FirstInformation = styled.div`
    width: 44rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.2rem;
    column-gap: 2rem;

    span {
        width: 25rem;
        font-weight: 400;
        font-size: 1.3rem;
        line-height: 1.5rem;
    }
`
export const SecondInformation = styled.div`
    width: 44rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;

`
export const Experience_projects = styled.div`
        border: 1px solid ${props => props.theme["yellow-500"]};
        border-radius: 4px;
        background: transparent;
        padding: 1rem;

        div {
            &:first-child {
                color: ${props => props.theme["yellow-500"]};
                display: flex;
                p {
                    font-weight: 800;
                    font-size: 3.2rem;
                    line-height: 3.8rem;
                }
                span {
                    font-weight: 400;
                    font-size: 2rem;
                    line-height: 2.3rem;
                }
            }
            &:nth-child(2) {
                margin-top: 1.2rem;
                padding-left: 1.4rem;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: .8rem;
                div {
                  height: 3rem;
                  width: .1rem;
                  background: ${props => props.theme["gray-500"]};
                }
                span {
                    width: 10rem;
                    font-weight: 400;
                    font-size: 1.6rem;
                    line-height: 1.5rem;
                }
            }
        }

`
