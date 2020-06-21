// import React from "react";
import React, { Component } from "react";
import Navbar from "./navBar";
import Counters from "./counters";
// import "./App.css";

class Apper extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <Counters />
        </main>
      </div>
    );
  }
}
export default Apper;
