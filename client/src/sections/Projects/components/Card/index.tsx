import { ArrowSquareOut, GithubLogo } from "phosphor-react"
import { ImgContainer, ProjectLinks } from "./styles"
import { Container } from "../../../ExperienceAndEducation/styled";


import igniteFeed from "../../../../assets/igniteFeed.svg"
import nlwCopa from "../../../../assets/nlwCopa.svg"
import coffeeDelivery from "../../../../assets/coffeeDelivery.svg"
import igniteTimer from "../../../../assets/igniteTimer.svg"
import igniteLab from "../../../../assets/igniteLab.svg"
import doctorCare from "../../../../assets/doctorCare.svg"

interface ICardProps {
    logo: 'igniteFeed' | 'nlwCopa' | 'coffeeDelivery' | 'igniteTimer' | 'igniteLab' | 'doctorCare';
    github: string;
    site: string;
}

export const Card = ({ logo, github, site }: ICardProps) => {
    return (
        <Container>
            <ImgContainer>
                {logo == 'igniteFeed' && <img src={igniteFeed} alt="" />}
                {logo == 'nlwCopa' && <img src={nlwCopa} alt="" />}
                {logo == 'coffeeDelivery' && <img src={coffeeDelivery} alt="" />}
                {logo == 'igniteTimer' && <img src={igniteTimer} alt="" />}
                {logo == 'igniteLab' && <img src={igniteLab} alt="" />}
                {logo == 'doctorCare' && <img src={doctorCare} alt="" />}
            </ImgContainer>
            <ProjectLinks>
                <a href={github} target="blank"> <div>  <GithubLogo size={26} /> <span>GitHub</span> </div> </a>
                <a href={site} target="blank"> <div>  <ArrowSquareOut size={26} /> <span>Site</span> </div> </a>
            </ProjectLinks>
        </Container>
    )
}