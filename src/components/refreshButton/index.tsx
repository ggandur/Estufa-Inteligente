import { RefreshButtonWrapper } from "./refreshButton.style";

type RefreshButtonProps = {
    getData: (event: any) => void
}

function RefreshButton(props: RefreshButtonProps) {
    return (
        <RefreshButtonWrapper
            onClick={props.getData}
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