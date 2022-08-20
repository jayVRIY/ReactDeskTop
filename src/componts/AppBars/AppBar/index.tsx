import styled from "styled-components";
import {useState} from "react";

const {BrowserWindow, remote} = require('electron')

enum AppSize {
    small = 30,
    normal = 50,
    big = 80
}

export default (props: { isActive: boolean, appName: string }) => {
    const {isActive, appName} = props;
    const [appbarSize, setAppbarSize] = useState(AppSize.normal);
    const [activeColor, setActiveColor] = useState("rgba(106,197,160,0.11)");

    const AppBar = styled.div`
      width: ${appbarSize}px;
      height: ${appbarSize}px;
      border-radius: 10px;
      background-color: ${isActive ? activeColor : ""}
    `
    return <AppBar title={appName} onClick={closeApp}>

    </AppBar>

    function closeApp() {
        remote.getCurrentWindow().close()
    }
}
