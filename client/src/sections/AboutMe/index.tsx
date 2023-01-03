import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Title } from "../../components/Title"
import { AboutMeContainer, Experience_projects, FirstInformation, PersonalInformationContainer, SecondInformation } from "./styles"
import curriculo from "../../assets/curriculo.pdf"

export const AboutMe = () => {
    const distance = formatDistanceToNow(new Date('2003-12-08T15:22:12.931Z'), {
        locale: ptBR,
    })
    const age = distance.split(' ')
    return (
        <AboutMeContainer>
            <Title title="Sobre mim" />

            <div>
                <h3>Informações pessoais</h3>
                <PersonalInformationContainer>
                    <FirstInformation>
                        <span>Primeiro nome: <strong>Eduardo</strong></span>
                        <span>Último nome: <strong>Sousa</strong></span>
                        <span> Idade: <strong>{age[0] == 'quase' ? distance : age[2] + ' anos'} </strong></span>
                        <span> Nacionalidade: <strong> brasileiro </strong></span>
                        <span> Telefone: <strong>+55 {`(87)`} 99819-9329 </strong></span>
                        <span> Endereço:  <strong> Serra Talhada </strong></span>
                        <span>Email: <strong> barrosoeduardo64@gmail.com</strong></span>
                        <span> Linguas: <strong> Português/Inglês </strong></span>
                    </FirstInformation>
                    <SecondInformation>
                        <Experience_projects>
                            <div>
                                <p>1</p>
                                <span>+</span>
                            </div>
                            <div>
                                <div></div>
                                <span>Anos de experiência</span>
                            </div>
                        </Experience_projects>
                        <Experience_projects>
                            <div>
                                <p>15</p>
                                <span>+</span>
                            </div>
                            <div>
                                <div></div>
                                <span>Projetos Completos</span>
                            </div>
                        </Experience_projects>
                    </SecondInformation>
                </PersonalInformationContainer>
            </div>
            <a href={curriculo} download="Currículo_de_Eduardo"> Pedir Currículo </a>
        </AboutMeContainer>
    )
}