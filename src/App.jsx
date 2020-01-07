import React,{ Component} from "react";
import Form from ",/components/Form";
import {calculatorBmi} from "./helper/bmiHelper"
class App extends Component {
  state = {
    weight:"",
    height:"",
    bmiValue:"",
    bmiMessage:""
  };
    onChangeHandler = e => this.state({ [e.target.name]: e.target.value});
    onSubmitHandler = e => {
      e.preventDefault();
      const [bmiValue , bmiMessage] = calculate bmi (
        this.state.weight,
        this.state.height
      );
      this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage});
    };
    render() {
      return(
        <div>
          <Form
          weight = {this.state.weight}
          height = {this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          />
        </div>
      );
    }
  }
export default App;

