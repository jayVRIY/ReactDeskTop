import styled from "styled-components";
import AppBar from "./AppBar";

export default () => <AppBars>
    <div className="container">
        <div className="apps">
            <AppBar isActive={true} logoImg={'/日历.svg'} appName={'我的日历'}/>
            <AppBar isActive={false} logoImg={'/205设置.svg'} appName={'设置'}/>
        </div>
    </div>
</AppBars>

const AppBars = styled.div`
  .container {
    display: flex;
    justify-content: center;

    .apps {
      position: absolute;
      bottom: 20px;
      padding: 8px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.63);
      display: flex;
    }
    
  }
`