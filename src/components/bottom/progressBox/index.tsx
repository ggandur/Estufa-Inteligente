import { ContainerWrapper, FillerWrapper, LabelWrapper } from "./progressBox.style"

type ProgressBoxProps = {
    bgColor: string
    completed: string
}

function ProgressBox(props: ProgressBoxProps) {
    return (
        <ContainerWrapper>
            <LabelWrapper>
                {props.completed + '%'}
            </LabelWrapper>
            <FillerWrapper
                completed={props.completed}
                bgColor={props.bgColor}>
            </FillerWrapper>
        </ContainerWrapper>
    )
}

export default ProgressBox