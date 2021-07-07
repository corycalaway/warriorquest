import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Counter extends Component {

    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200'
    };

    styles = {
      fontSize: 20,
      fontWeight: 'bold'
    }

  render() {
    return (
      <React.Fragment>
        <span>{"ITEM"}</span>
        <img src={this.state.imageUrl} alt="" />
        <br></br>
        <span style={this.styles}>{this.formatCount()}</span>
        <Button className="">Increment</Button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}







export default Counter;
