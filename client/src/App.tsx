import { ThemeProvider } from "styled-components";
import { Home } from "./screens/Home";
import { AboutMe } from "./sections/AboutMe";
import { ContateMe } from "./sections/ContateMe";
import { ExperienceAndEducation } from "./sections/ExperienceAndEducation";
import { HomeSection } from "./sections/Home";
import { Knowledge } from "./sections/Knowledge";
import { Projects } from "./sections/Projects";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />  
      {/* <div className="home">
        <HomeSection />
        <AboutMe />
        <ExperienceAndEducation />
        <Knowledge />
        <Projects />
        <ContateMe />
      </div> */}
      <GlobalStyles />
    </ThemeProvider>
  )
}

