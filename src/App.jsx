import React, { Component } from "react";

import Form from "./components/Form";
import Message from "./components/Message";
import { calculateBmi } from "./helper/bmiHelper";

class App extends Component {
  state = {
    weight: "",
    height: "",
    bmiValue: "",
    bmiMessage: "",
    bmiImpMessage:"",
    bmiImperial:"",
    type: "Metric",
  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });
  onChangeRadio = e => { console.log(e.currentTarget.value)
    this.setState({ [e.currentTarget.name]: e.target.value })};

  onSubmitHandler = e => {
    e.preventDefault();
    console.log(this.state.type)
    const [bmiValue, bmiMessage,bmiImperial,bmiImpMessage] = calculateBmi(
      this.state.weight,
      this.state.height
    );
    console.log(bmiImperial,bmiValue)
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage ,bmiImperial:bmiImperial ,bmiImpMessage:bmiImpMessage});
  };

  render() {
    return (
      <div>
        <Form
          weight={this.state.weight}
          height={this.state.height}
          onChangeHandler={this.onChangeHandler}
          onSubmitHandler={this.onSubmitHandler}
          onChangeRadio={this.onChangeRadio}
          type={this.state.type}
        />
        {this.state.bmiValue && (
          <Message
            bmiValue={this.state.bmiValue}
            bmiMessage={this.state.bmiMessage}
            bmiImperial={this.state.bmiImperial}
            bmiImpMessage={this.state.bmiImpMessage}
            type={this.state.type}
          />
        )}
      </div>
    );
  }
}

export default App;

