import { TitleContainer } from "./styles";

interface ITitleProps {
    title: 'Sobre mim' | 'Experiencia & Educação ' | 'Conhecimento' | 'Projetos' | 'contate-me';
}

export const Title = ({title}: ITitleProps) => {

    const firstLetter = title[0]
    console.log(firstLetter)

    return (
        <TitleContainer>
            <span>{firstLetter}</span>
            <h1>{title}</h1>
        </TitleContainer>
    )
}