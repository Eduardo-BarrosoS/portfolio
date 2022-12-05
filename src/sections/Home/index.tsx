import { ContainerImg, HomeContainer } from "./styles"

export const HomeSection = () => {
    return (
        <HomeContainer>
            <ContainerImg>
                <div></div>
                <img src="https://github.com/Eduardo-BarrosoS.png" alt="" />
            </ContainerImg>
            <div>
                <h1>Eduardo Barroso</h1>
                <span>{'<FRONT-END DEVELOPER />'}</span>
                <p>
                    Olá, Bem vindo ao meu portifolio, eu me chamo Eduardo,
                    Sou densencolver front-end. Tenho conhecimento em vairas
                    tecnologias e atualmente estou em busca da minha primeira 
                    oportunidade nessa área.
                </p>
                <button>
                    Ler mais {"-->"}
                </button>
            </div>
        </HomeContainer>
    )
}