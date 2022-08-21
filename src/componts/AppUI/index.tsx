import Draggable from "react-draggable";
import styled from "styled-components";

const AppUI = styled.div<{ UIHeight: number, UIWidth: number, Tag: number }>`
  width: ${props => props.UIWidth}px;
  height: ${props => props.UIHeight}px;
  border-radius: ${props => props.Tag / 2}px;
  overflow: hidden;

  .tag {
    height: ${props => props.Tag}px;
    width: 100%;
    background-color: rgb(176, 219, 236);
    cursor: pointer;
  }

  .UI-body {
    height: ${props => (props.UIHeight - props.Tag)}px;
    width: 100%;
    background-color: #fff;
  }
`;
const RoundTagStyle = styled.div``

function RoundTag(props: { OperateBottom: () => JSX.Element }) {
    const {OperateBottom} = props
    return <RoundTagStyle>
        <OperateBottom/>
    </RoundTagStyle>;
}

export default () => {
    return <Draggable handle={'.tag'}>
        <AppUI UIHeight={500} UIWidth={500} Tag={35}>
            <div className="tag">
                <RoundTag OperateBottom={() => <div className={"close"}></div>}></RoundTag>
            </div>
            <div className="UI-body">

            </div>
        </AppUI>
    </Draggable>
}