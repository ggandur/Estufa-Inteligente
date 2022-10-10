import { BottomWrapper } from "./bottom.style";
import ProgressBox from "../bottom/progressBox"
import Box from "./box";

type BottomProps = {
    luminosityValue: String
    humidityValue: String
}

function Bottom(props: BottomProps) {
    return (
        <BottomWrapper>
            <Box description={"Luminosidade"} value={props.luminosityValue} />
            <Box description={"Humidade"} value={props.humidityValue} />
        </BottomWrapper>
    )
}

export default Bottom