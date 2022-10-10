import { BoxWrapper } from "./box.style";
import ProgressBox from "../progressBox";

type BoxProps = {
    description: String
    bgColor: string
    completed: string
}

function Box(props: BoxProps) {
    return (
        <BoxWrapper>
            <h2>{props.description}</h2>
            <ProgressBox bgColor={props.bgColor} completed={props.completed}/>
        </BoxWrapper>
    )
}

export default Box