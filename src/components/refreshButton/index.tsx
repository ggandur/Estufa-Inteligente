import { RefreshButtonWrapper } from "./refreshButton.style";
import { getData } from "../functions/getData"
import DataType from "../../interfaces/dataType";

type RefreshButtonProps = {
    setData: (data: DataType) => void
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

export default RefreshButton