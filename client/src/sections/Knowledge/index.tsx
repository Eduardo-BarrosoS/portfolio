import { Title } from "../../components/Title"
import { ItemsContainer } from "./styles"
import react from "../../assets/react.svg"
import typescript from "../../assets/typescript.svg"
import javascript from "../../assets/javascript.svg"
import angular from "../../assets/angular.svg"
import tailwindcss from "../../assets/tailwindcss.svg"
import sass from "../../assets/sass.svg"
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"

export const Knowledge = () => {
    return (
        <div>
            <Title title="Conhecimento" />
            <ItemsContainer>
                
                <div>
                    <img src={react} alt="" />
                </div>
                <div>
                    <img src={typescript} alt="" />
                </div>
                <div>
                    <img src={javascript} alt="" />
                </div>
                <div>
                    <img src={angular} alt="" />
                </div>
                <div>
                    <img src={tailwindcss} alt="" />
                </div>
                <div>
                    <img src={sass} alt="" />
                </div>
                <div>
                    <img src={html} alt="" />
                </div>
                <div>
                    <img src={css} alt="" />
                </div>

            </ItemsContainer>
        </div>
    )
}