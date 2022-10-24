import { RefreshButtonWrapper } from "./refreshButton.style";
import { getData } from "../functions/getData"
import DataType from "../../interfaces/dataType";
import { SetStateAction } from "react";

type RefreshButtonProps = {
    setData: React.Dispatch<SetStateAction<{} | DataType | undefined>>
}

function RefreshButton(props: RefreshButtonProps) {
    return (
        <RefreshButtonWrapper
            onClick={() => getData(props.setData)}
        >
            <img
                src="src/assets/refresh.png"
                alt="Refresh icon"
                height={45}
            />
        </RefreshButtonWrapper>
    )
}
// Já esta componentizado

export default RefreshButton