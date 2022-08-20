import styled from "styled-components";
import AppBar from "./AppBar";

export default () => <AppBars>
    <AppBar isActive={true} appName={'我的日历'}/>
</AppBars>

const AppBars = styled.div`
  position: absolute;
  width: 80%;
  bottom: 20px;
  margin-left: 10%;
  padding: 8px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.63);
`