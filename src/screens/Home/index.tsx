import { AboutMe } from "../../sections/AboutMe"
import { HomeSection } from "../../sections/Home"
import { HomeContainer } from "./styles"

export const Home = () => {
    return (
        <HomeContainer>
            <HomeSection />
            <AboutMe />
        </HomeContainer>
    )
}