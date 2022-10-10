import { HomePageWrapper } from "./homePage.style"
import Title from '../title'
import Bottom from "../bottom"
import TemperatureDisplay from "../temperatureDisplay"

type HomePageProps = {
    temperature: String
    luminosityValue: string
    humidityValue: string
}

function HomePage(props: HomePageProps) {
    return (
        <HomePageWrapper>
            <Title title={"Smart Plant"} />
            <TemperatureDisplay value={props.temperature} />
            <img
                src="src/assets/planta_example.png"
                alt="Example of Plant GIF"
                height={450}
            />
            <Bottom
                luminosityValue={props.luminosityValue}
                humidityValue={props.humidityValue} />
        </HomePageWrapper>
    )
}

export default HomePage