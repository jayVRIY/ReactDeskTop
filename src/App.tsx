import styled, {keyframes} from 'styled-components'
import Tag from './component/Tag';

const Logs = styled.div`
  width: 500px;
  height: 300px;
  margin: 100px auto;
  background-color: #cfeee3;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 5px 5px 20px rgba(133, 133, 133, 0.39);
`
export default () => {
    return <Logs >
        <Tag/>
        <Tag/>
        <Tag/>
        <Tag/>
    </Logs>
}