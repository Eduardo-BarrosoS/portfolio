import styled from "styled-components";

export const ItemsContainer = styled.div`

        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        row-gap: 9.5rem;

        div {

            display: flex;
            align-items: center;
            justify-content: center;
            border: .2rem solid ${props => props.theme["yellow-300"]};
            border-radius: 50%;
            width: 10rem;
            height: 10rem;

            img {
                width: 4rem;
                height: 4rem;
            }
        }
`