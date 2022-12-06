import { Title } from "../../components/Title"
import { Experience } from "./components/Experience"
import { Container, ExperienceAndEducationContainer } from "./styled"

export const ExperienceAndEducation = () => {
    return (
        <Container>
            <Title title="Experiencia & Educação " />

            <ExperienceAndEducationContainer>
                <Experience
                    startedAt="Mar. de 2018"
                    finishedAt="Dez. de 2020"
                    companyName="EREM Professor Adaulto Carvalho "
                    specification="Ensino Médio Completo"
                    isFinished={true}
                    isAJob={false}
                />
                <Experience
                    companyName="Sem Experiência "
                    specification="Em busca de uma oportunidade"
                    isAJob={true}
                    withoutExperiences={true}
                />
                <Experience
                    startedAt="jan. de 2022"
                    finishedAt="Momento"
                    companyName="Roketseat"
                    specification="Front-ent Developer (Reactjs)"
                    isFinished={false}
                    isAJob={false}
                />
            </ExperienceAndEducationContainer>
        </Container>
    )
}