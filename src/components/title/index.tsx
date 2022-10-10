import { TitleWrapper } from "./title.style";
import { IconWrapper } from "./icon.style"
import RefreshButton from "../refreshButton";

type TitleProps = {
    title: String
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
            <RefreshButton getData={function (event: any): void {
                throw new Error("Function not implemented.");
            } }/>
        </TitleWrapper>
    )
}

export default Title