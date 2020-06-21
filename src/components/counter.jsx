import React, { Component } from "react";

class Counter extends Component {
  // Controlled component which receives every data from its Parent
  // and raises events whwenever data needs to be changed
  // state = {
  //   count: this.props.counter.value,
  //   tags: ["tag1", "tag2", "tag3"],
  //   imageUrl: "https://picsum.photos/200"
  // };
  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold"
  //   };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  render() {
    console.log(this.props);
    return (
      <div>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* {this.props.children}<img src={this.state.imageUrl}></img> */}
        {/* <br></br> */}
        <button
          //   onClick={() => this.handleIncrement({ product: 1 })}
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.props.counter.value;
    // const x = <h1>Zero</h1>;
    return count === 0 ? "Zero" : count;
  }

  //   handleIncrement = product => {
  //     console.log(product);
  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  //   console.log("Button Clicked " + this.state.count);
  //   // handleIncrement() bina arrow function ke agar use karna hai toh constructor call karna padhega
  // };
}

export default Counter;
