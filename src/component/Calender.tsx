import styled from "styled-components";

const Calender = styled.div`
  width: 52px;
  height: 52px;
  margin: 4px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1.5px 5px rgba(18, 103, 77, 0.62);

  .month {
    height: 20px;
    width: 100%;
    background-color: #077580;
    border-radius: 10px 10px 0 0;
    font-size: 10px;
    font-weight: 600;
    color: #fff;
    line-height: 20px;
  }
  .day{
    font-size: 23px;
    font-weight: 600;
  }
`

export default () => {
    return <Calender>
        <div className="month">
            三月
        </div>
        <div className="day">
            23
        </div>
    </Calender>
}