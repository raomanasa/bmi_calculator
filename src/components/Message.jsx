import React from "react"

const Message = props  => {
    console.log(props.type)
    return(
        <div>
        {props.type === "Metric" ? 
        <p id='bmi-message'>
            You are {props.bmiMessage} with a BMI of {props.bmiValue}
            
        </p> :
        <p id='bmi-message'>
        You are {props.bmiImpMessage} with a BMI of {props.bmiImperial}
        </p>}
        </div>
    );
};
export default Message;