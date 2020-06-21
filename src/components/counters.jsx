import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // state = {
  //   counted: [
  //     { id: 1, value: 5 },
  //     { id: 2, value: 0 },
  //     { id: 3, value: 0 },
  //     { id: 4, value: 0 }
  //   ]
  // };

  // handleIncrement = counter => {
  //   // console.log(counter);
  //   const new_counted = [...this.state.counted];
  //   const index = new_counted.indexOf(counter);
  //   new_counted[index] = { ...counter }; // object by obj(single) receive karega
  //   new_counted[index].value++; // an uss single object ki value ko increment karega
  //   this.setState({ counted: new_counted });
  // };

  // handleReset = () => {
  //   const cntr = this.state.counted.map(c => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counted: cntr });
  // };

  // handleDelete = counterId => {
  //   // console.log("deleetin", counterId);
  //   const cnt = this.state.counted.filter(c => c.id !== counterId);
  //   this.setState({ counted: cnt });
  // };

  render() {
    // Destructing arguments just to simplify the code
    const { onReset, onIncrement, counted, onDelete } = this.props;
    return (
      <div>
        <button
          // onClick={this.handleReset}
          // onClick={this.props.onReset}
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {/* {this.state.counted.map(counter => ( */}
        {counted.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            // id={counter.id}
            // value={counter.value}
            // selected={true}
          />
          //     {/* <h3>Counter #{counter.id} </h3>
          //   </Counter> */}
        ))}
      </div>
    );
  }
}

export default Counters;
