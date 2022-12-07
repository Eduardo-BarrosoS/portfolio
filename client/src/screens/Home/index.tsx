import { AboutMe } from "../../sections/AboutMe"
import { ContateMe } from "../../sections/ContateMe"
import { ExperienceAndEducation } from "../../sections/ExperienceAndEducation"
import { HomeSection } from "../../sections/Home"
import { Knowledge } from "../../sections/Knowledge"
import { Projects } from "../../sections/Projects"
import { HomeContainer } from "./styles"

export const Home = () => {
    return (
        <HomeContainer>
            <HomeSection />
            <AboutMe />
            <ExperienceAndEducation />
            <Knowledge />
            <Projects />
            <ContateMe />
        </HomeContainer>
    )
}