import { HomePageWrapper } from "./homePage.style"
import Title from '../title'
import Bottom from "../bottom"
import TemperatureDisplay from "../temperatureDisplay"
import ProgressBox from "../bottom/progressBox"

type HomePageProps = {
    luminosityValue: String
    humidityValue: String
}

function HomePage(props: HomePageProps) {
    return (
        <HomePageWrapper>
            <Title title={"Smart Plant"} />
            <TemperatureDisplay value={"28.7"} />
            <img
                src="src/assets/planta_example.png"
                alt="Example of Plant GIF"
                height={450}
            />
            <ProgressBox bgColor={"blue"} completed={"58%"}/>
            <Bottom
                luminosityValue={props.luminosityValue}
                humidityValue={props.humidityValue} />
        </HomePageWrapper>
    )
}

export default HomePage