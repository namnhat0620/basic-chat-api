import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";


const DatePickerDiv = styled.div`
  position: relative;
`;

const CustomDatePickDiv = styled.div`
  width: 140px;
  height: 40px;
  padding: 10px 20px;
  border-radius: 20px;
  border: 2px solid lightgray;
`;

const UserDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const CustomInput = React.forwardRef((props, ref) => {
        return (
          <CustomDatePickDiv>
            <div onClick={props.onClick} ref={ref} style={{display: "flex", justifyContent: "space-between", marginRight: '-10px'}}>
              <span>{props.value || props.placeholder}</span>
              <FontAwesomeIcon icon={faCalendarAlt} onClick={props.onClick} />
            </div>
            
          </CustomDatePickDiv>
        );
      });
    return (
        <DatePicker
        //showIcon
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat='dd/MM/yyyy'
        customInput={<CustomInput />}
      /> 
    )
}

export default UserDatePicker