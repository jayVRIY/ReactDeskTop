import styled from "styled-components";
import AppBars from "./componts/AppBars";
import Desktop from "./componts/Desktop";
import StatusBar from "./componts/StatusBar";
import AppUI from "./componts/AppUI";

const {clientHeight, clientWidth} = window.document.documentElement;
let element = (): JSX.Element => {
    return <>
        <Window style={{width: clientWidth, height: clientHeight}}>
            <Desktop></Desktop>
            <AppBars></AppBars>
            <AppUI></AppUI>
            <StatusBar></StatusBar>
        </Window>
    </>;
};
export default element
const Window = styled.div`
  background-image: url(/1Z121111I5-1-1200.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`