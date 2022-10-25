import { TitleWrapper } from "./title.style";
import { IconWrapper } from "./icon.style"
import RefreshButton from "../refreshButton";
import DataType from "../../interfaces/dataType";

type TitleProps = {
    title: String
    setData: (data: DataType) => void
}

function Title(props: TitleProps) {
    return (
        <TitleWrapper>
            {props.title}
            <IconWrapper>
                <img
                    src="src/assets/leafIcon.png"
                    alt="Smart Plant icon"
                    height={45}
                />
            </IconWrapper>
            <RefreshButton
                setData={props.setData}
            />
        </TitleWrapper>
    )
}

export default Title