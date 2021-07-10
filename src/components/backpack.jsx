import React, { Component } from "react";


class Backpack extends Component {
  state = {
    items: []
  };

  renderItems() {
    if (this.state.items.length === 0) return <p>You have no items!</p>;

    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
        <div>
            { this.renderItems()}
        </div>
    )
  }
}

export default Backpack;
