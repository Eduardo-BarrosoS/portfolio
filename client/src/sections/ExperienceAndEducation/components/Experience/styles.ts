import styled from "styled-components";

export const ExperienceContainer = styled.div`

        /* div {
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
            } */
            /* &:nth-child(2) {
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
            } */
    


`

export const DateInformation = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            margin-inline: .4rem;
        }
        p {
            width: 8rem;
            height: 1.6rem;
            font-weight: 300;
            font-size: 1rem;
            line-height: 1.2rem;
            background: ${props => props.theme["gray-500"]};
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:first-child {
                margin-left: 1.2rem;
            }
            &:last-child {
                margin-right: 3rem;
            }
        }
    }

`
export const ExperienceInformation = styled.div`
    display: flex;
    align-items: center;
    div {
        
        &:first-child {
            height: 4.4rem;
            width: .1rem;
            background: ${props => props.theme["gray-500"]};
            margin-inline: 1.6rem;
        }
        &:last-child {
            display: flex;
            flex-direction: column;
            strong, span {
                font-size: 1.6rem;
                line-height: 1.9rem;
            }
            strong {
                color: ${props => props.theme["gray-100"]};
            }
            span {
                font-weight: 300;
                color: ${props => props.theme["gray-500"]};
            }
        }
    }

`