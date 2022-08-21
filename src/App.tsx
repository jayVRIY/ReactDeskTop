import styled from "styled-components";
import AppBars from "./componts/AppBars";
import Desktop from "./componts/Desktop";
import StatusBar from "./componts/StatusBar";

const {clientHeight, clientWidth} = window.document.documentElement;
let element = (): JSX.Element => {
    return <>
        <Window style={{width: clientWidth, height: clientHeight}}>
            <Desktop></Desktop>
            <StatusBar></StatusBar>
            <AppBars></AppBars>
        </Window>
    </>;
};
export default element
const Window = styled.div`
  background-image: url(/1Z121111I5-1-1200.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`