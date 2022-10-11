import { TitleWrapper } from "./title.style";
import { IconWrapper } from "./icon.style"
import RefreshButton from "../refreshButton";
import DataType from "../../interfaces/dataType";
import { SetStateAction } from "react";

type TitleProps = {
    title: String
    setData: React.Dispatch<SetStateAction<{} | DataType | undefined>>
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