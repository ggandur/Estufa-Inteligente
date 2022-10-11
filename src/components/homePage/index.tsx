import { HomePageWrapper } from "./homePage.style"
import Title from '../title'
import Bottom from "../bottom"
import TemperatureDisplay from "../temperatureDisplay"
import DataType from "../../interfaces/dataType"
import { SetStateAction } from "react"

type HomePageProps = {
    data: DataType | {}
    setData: React.Dispatch<SetStateAction<{} | DataType | undefined>>
}

function HomePage(props: HomePageProps) {
    return (
        <HomePageWrapper>
            <Title
                title={"Smart Plant"}
                setData={props.setData}
            />
            <TemperatureDisplay value={(props.data as DataType).temperature} />
            <img
                src="src/assets/sunflowerGif.gif"
                alt="Example of Plant GIF"
                height={450}
            />
            <Bottom
                luminosityValue={(props.data as DataType).luminosityValue}
                humidityValue={(props.data as DataType).humidityValue} />
        </HomePageWrapper>
    )
}

export default HomePage