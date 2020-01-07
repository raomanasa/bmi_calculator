import React from "react"
const Form = props => {
    return(
    <form onSubmit={props.onSubmitHandler} >
        <h1 className="header">BMI CALCULATOR</h1>
        <br />
        <br/>
        <div className="box">
        <br/>
        <br/>
        <lable htmlFor="weight">Weight</lable>
            <input
            className="textstyle"
            type="number"
            required
            placeholder="Weight in kgs/pounds"
            name="weight"
            id="weight"
            onChange={props.onChangeHandler}
            />
            <br/>
            <br/>
            <label htmlFor="height">Height</label>
            <input
            className="textstyle"
            type="number"
            required
            placeholder="Height in cm/inches"
            name="height"
            id="height"
            onChange={props.onChangeHandler}
            />
            <br/>
            <br/>
            <br/>
            <label htmlFor="Metric">Metric</label>
            <input
            type="radio"
            name="type"
            id="Metrix"
            value= {"Metric"} 
            checked = {props.type === "Metric"}
            onChange={props.onChangeRadio}
            />
            <label htmlFor="Imperial">Imperial</label>
            <input
            type="radio"
            name="type"
            id="Imperial"
            value= {"Imperial"} 
            checked = {props.type === "Imperial"}
            onChange={props.onChangeRadio}
            />
            <br/>
            <br/>
            <br/>
            <button id="calculate" className="button"> calculate</button>
            <br/>
            </div>
        </form>

    );
};
export default Form;