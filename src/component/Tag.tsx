import styled from "styled-components";
import Calender from "./Calender";
import LearningDetail from "./LearningDetail";

const Tag = styled.div`
  width: 95%;
  height: 60px;
  text-align: center;
  margin: 0 auto;
  border: 10px;
  background-color: #78e8cf;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;
export default () => {
    return <Tag>
        <Calender></Calender>
        <LearningDetail></LearningDetail>
    </Tag>
}
