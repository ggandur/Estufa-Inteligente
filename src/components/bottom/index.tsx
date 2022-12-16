import { BottomWrapper } from "./bottom.style";
import Box from "./box";

type BottomProps = {
    luminosityValue: string
    humidityValue: string
}

function Bottom(props: BottomProps) {
    return (
        <BottomWrapper>
            <Box
                description={"Luminosidade"}
                bgColor={"rgba(251, 255, 0, 0.9)"}
                completed={props.luminosityValue}
            />
            <Box
                description={"Umidade"}
                bgColor={"rgba(0, 68, 255, 0.9)"}
                completed={props.humidityValue}
            />
        </BottomWrapper>
    )
}

export default Bottom