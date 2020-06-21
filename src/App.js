import React, { Component } from "react";
import Navbar from "./components/navBar";
import Counters from "./components/counters";
// import "./App.css";

class App extends Component {
  state = {
    counted: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    // console.log(counter);
    const new_counted = [...this.state.counted];
    const index = new_counted.indexOf(counter);
    new_counted[index] = { ...counter }; // object by obj(single) receive karega
    new_counted[index].value++; // an uss single object ki value ko increment karega
    this.setState({ counted: new_counted });
  };

  handleReset = () => {
    const cntr = this.state.counted.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counted: cntr });
  };

  handleDelete = counterId => {
    // console.log("deleetin", counterId);
    const cnt = this.state.counted.filter(c => c.id !== counterId);
    this.setState({ counted: cnt });
  };

  render() {
    return (
      <div>
        <Navbar
          totalcounters={this.state.counted.filter(c => c.value > 0).length}
        />
        <main className="container">
          {/* now this counters component is a controlled component as it does not have any state
          and it received everything from its parent via props. */}
          <Counters
            counted={this.state.counted}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </div>
    );
  }
}
export default App;
