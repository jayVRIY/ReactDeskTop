import styled from "styled-components";

export default () => {
    return <LearningDetail>
        <div className="learningThing">
            学习React
        </div>
        <div className="time">
            40分钟
        </div>
    </LearningDetail>
}
const LearningDetail = styled.div`
  text-align: center;
  margin: 0 auto;
  align-self: center;
  .learningThing {
    font-weight: 600;
    font-size: 13px;
  }

  .time {
    margin-top: 6px;
    font-weight: 600;
    font-size: 13px;
    color: #077580;
  }
`