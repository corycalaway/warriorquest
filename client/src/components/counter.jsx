import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    console.log("clicked", this.state.count);
  }

  render() {
    return (
      <React.Fragment>
        <span>{"ITEM"}</span>
        <img src={this.state.imageUrl} alt="" />
        <br></br>
        <span style={this.styles}>{this.formatCount()}</span>

        <Button
          onClick={this.handleIncrement}
          style={{ fontSize: 15 }}
          className={this.getBadgeClasses()}
        >
          Increment
        </Button>
        <ul>
          {
            //renders a list of items
          }
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
