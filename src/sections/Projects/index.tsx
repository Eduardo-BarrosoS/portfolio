import { Title } from "../../components/Title"
import { Card } from "./components/Card"
import igniteFeed from "../../assets/igniteFeed.svg"
import { Cards } from "./styles"


export const Projects = () => {
    return (
        <div>
            <Title title="Projetos" />
            <Cards>
                <Card logo="igniteFeed" github="https://eduardo-barrosos.github.io/Iginite-Feed/" site="https://eduardo-barrosos.github.io/Iginite-Feed/" />
                <Card logo="nlwCopa" github="" site="" />
                <Card logo="coffeeDelivery" github="https://github.com/Eduardo-BarrosoS/coffee-delivery" site="https://coffee-delivery-wheat-tau.vercel.app/" />
                <Card logo="igniteTimer" github="https://github.com/Eduardo-BarrosoS/Ignite-Timer" site="https://ignite-timer-orpin.vercel.app/" />
                <Card logo="igniteLab" github="" site="" />
                <Card logo="doctorCare" github="https://github.com/Eduardo-BarrosoS/DoctorCare" site="https://eduardo-barrosos.github.io/DoctorCare/" />
            </Cards>
        </div>
    )
}