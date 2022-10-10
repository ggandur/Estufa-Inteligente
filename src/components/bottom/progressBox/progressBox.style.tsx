import styled from "styled-components";

export const ContainerWrapper = styled.div`
    height: 100px;
    width: 175px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    position: relative;
    z-index: 1;
`

export const FillerWrapper = styled.div.attrs((props: { completed: string, bgColor: string }) => props)`
    height: ${(props) => props.completed};
    min-height: 20%;
    width: 100%;
    background-color: rgba(42, 81, 255, 0.507);
    border-radius: inherit;
    position: absolute;
    bottom: 0;
`

export const LabelWrapper = styled.div`
    color: white;
    width: 100%;
    font-size: 4rem;
    text-align: center;
    position: absolute;
    bottom: 35%;
    z-index: 2;  
`