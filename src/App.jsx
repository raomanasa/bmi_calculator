import React,{ Component} from "react";
class App extends Component {
  render(){
    return (
    <form>
      <lable htmlFor="weight">Weight</lable>
      <input
      type="number"
      required
      placeholder="Weight in Kgs"
      name="weight"
      id="weight"
      />
      <lable htmlFor="height">height</lable>
      <input
      type="number"
      required
      placeholder="Height in cm"
      name="height"
      id="height"
      />
      <button>Calculator BMI</button>
    </form>
    );
  }
}

export default App;
