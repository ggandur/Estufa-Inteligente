import { TemperatureDisplayWrapper } from "./temperatureDisplay.style";

type TemperatureDisplayProps = {
    value: String
}

function TemperatureDisplay(props: TemperatureDisplayProps) {
    return (
        <TemperatureDisplayWrapper>
            {`${props.value} ºC`}
        </TemperatureDisplayWrapper>
    )
}

export default TemperatureDisplay