import { HomePageWrapper } from "./homePage.style"
import Title from '../title'
import Bottom from "../bottom"
import TemperatureDisplay from "../temperatureDisplay"
import DataType from "../../interfaces/dataType"

type HomePageProps = {
    data: DataType
    setData: (data: DataType) => void
}

function HomePage(props: HomePageProps) {
    return (
        <HomePageWrapper>
            <Title
                title={"Smart Plant"}
                setData={props.setData}
            />
            <TemperatureDisplay value={props.data.main.temperature} />
            <img
                src="src/assets/sunflowerGif.gif"
                alt="Example of Plant GIF"
                height={450}
            />
            <Bottom
                luminosityValue={props.data.main.luminosityValue}
                humidityValue={props.data.main.humidityValue} />
        </HomePageWrapper>
    )
}

export default HomePage