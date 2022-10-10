import { BoxWrapper } from "./box.style";
import { ContainerWrapper } from "../container.style"

type BoxProps = {
    value: String;
    description: String
}

function Box(props: BoxProps) {
    return (
        <BoxWrapper>
            <ContainerWrapper>
                <h2>{props.description}</h2>
                <h1>{props.value}</h1>
            </ContainerWrapper>
        </BoxWrapper>
    )
}

export default Box