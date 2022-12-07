import { ArrowRight, Alarm, InstagramLogo, WhatsappLogo, LinkedinLogo, GithubLogo } from "phosphor-react"
import { useState } from "react"
import { ContainerImg, HomeContainer, Presentation, SocialMedias } from "./styles"

export const HomeSection = () => {

    const [button, setButton] = useState(false)

    return (
        <>
            <HomeContainer>
                <ContainerImg>
                    <div></div>
                    <img src="https://github.com/Eduardo-BarrosoS.png" alt="" />
                </ContainerImg>
                <Presentation>
                    <h1>Eduardo Barroso</h1>
                    <span>{'<FRONT-END DEVELOPER/ >'}</span>
                    <p>
                        Olá, Bem vindo ao meu portifolio, eu me chamo Eduardo,
                        Sou densencolver front-end. Tenho conhecimento em vairas
                        tecnologias e atualmente estou em busca da minha primeira
                        oportunidade nessa área.
                    </p>
                    <button onMouseMove={() => setButton(true)} onMouseLeave={() => setButton(false)} >
                        {!button ? <p>Ler mais <ArrowRight size={20} /> </p> : null}
                        {button ? <p> Em Breve <Alarm size={20} /> </p> : null}
                    </button>
                </Presentation>
            </HomeContainer>
            <SocialMedias>
                <a href="https://api.whatsapp.com/send?phone=5587998199329" target='blank'> <WhatsappLogo size={32}/> </a>
                <a href="https://www.instagram.com/eduardobarroso64/" target='blank'> <InstagramLogo size={32}/> </a>
                <a href="https://www.linkedin.com/in/eduardo-barroso-04a513214/" target='blank'> <LinkedinLogo size={32}/> </a>
                <a href="https://github.com/Eduardo-BarrosoS" target='blank'> <GithubLogo size={32}/> </a>
            </SocialMedias>
        </>
    )
}