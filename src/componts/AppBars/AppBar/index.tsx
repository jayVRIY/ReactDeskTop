import styled from "styled-components";
import {useEffect, useState} from "react";

enum AppSize {
    small = 30,
    normal = 50,
    big = 80
}

export default (props: { isActive: boolean, appName: string, logoImg: string }) => {
    const {isActive, appName, logoImg} = props;
    const [appbarSize] = useState(AppSize.normal);
    const [activeColor] = useState("rgba(106,197,160,0.11)");
    const [activeAndHoverColor] = useState("rgba(106,197,160,0.2)");
    const [hoverColor] = useState("rgba(206,206,206,0.2)");
    const [currentColor, setCurrentColor] = useState("")
    const [isHover, setIsHover] = useState(false)
    useEffect(() => {
        if (isActive && isHover) setCurrentColor(() => activeAndHoverColor)
        else if (isActive && !isHover) setCurrentColor(() => activeColor)
        else if (!isActive && isHover) setCurrentColor(() => hoverColor)
        else setCurrentColor(() => "")
    }, [currentColor, isHover])


    return <AppBar appbarSize={appbarSize}
                   logoImg={logoImg}
                   currentColor={currentColor}
                   title={appName}
                   onMouseEnter={() => setIsHover(() => true)}
                   onMouseLeave={() => setIsHover(() => false)}>
        <div className={"logo"}>

        </div>
    </AppBar>
}
const AppBar = styled.div<{ appbarSize: number, currentColor: string, logoImg: string }>`
  width: ${props => props.appbarSize}px;
  height: ${props => props.appbarSize}px;
  padding: 8px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${props => props.currentColor};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }

  .logo {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(${props => props.logoImg});

    &:hover {
      cursor: pointer;
    }
  }
`
