import styled from "styled-components";

export const ContateMeContainer = styled.div`
    padding-bottom: 16rem;

    & > div {
        display: flex;
        gap: 6.4rem;
    }

`

export const FirstInformation = styled.div`
    width: 44rem;
    column-gap: 2rem;
    
    h3 {
        color: ${props => props.theme["gray-100"]};
        font-weight: 500;
        font-size: 3.2rem;
        margin-bottom: 2.4rem;
    }
    span {
        width: 42.2rem;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2rem;
    }
`
export const FormContainer = styled.form`
    width: 44rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.4rem;
    }

    input {
        height: 3.6rem;
        border-radius: 42px;
    }
    
    textarea {
        padding-top: 1.2rem;
        height: 15rem;
        border-radius: 1.6rem;
        resize: none;
    }

    input, textarea {
        width: 100%;
        background: ${props => props.theme["gray-700"]};
        padding-inline: 1.2rem;
        border: none;
        font-size: 1.4rem;
        color: ${props => props.theme["gray-100"]};

        &::placeholder {
            font-size: 1.2rem;
        }
    }

    button {
        width: 16rem;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
        border-radius: 3.5rem;
        border: 1px solid ${props => props.theme["yellow-500"]};
        color: ${props => props.theme["yellow-500"]};
        background: transparent;
        font-size: 1.4rem;
        font-weight: bold;
        cursor: pointer;
        &:hover {
            transition: all 300ms ease;
            scale: 1.05;
        }
    }

`
export const Phone = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2.4rem;
    margin-top: 3.2rem;
    div {
        width: 30rem;
        display: flex;
        flex-direction: column;
        p {
            color: ${props => props.theme["gray-100"]};
            font-size: 1.4rem;
        }
        spam {
            color: ${props => props.theme["gray-500"]};
            font-size: 1.2rem;
        }
    } 
    `
export const Email = styled(Phone)`
    margin-top: 2.4rem;
`
