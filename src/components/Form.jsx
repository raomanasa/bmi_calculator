import React from "react"
const Form =Props => {
    return(
    <form onSubmit={props.onSubmitHandler}>
        <lable htmlFor="weight">Weight</lable>
            <input
            type="number"
            required
            placeholder="Weight in kgs"
            name="weight"
            id="weight"
            onChange={props.onChangeHandler}
            />
            <lable htmlFor="height">Height</lable>
            <input
            type="number"
            required
            placehlder="Height in cm"
            name="height"
            id="height"
            onChange={props.onChangeHandler}
            />
            <button>Calculate BMI</button>
        </form>
    );
};
export default Form;