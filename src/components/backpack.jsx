import React, { Component } from "react";


class Backpack extends Component {
  state = {
    items: ["Potato", "Iron", "Shirt"]
  };

  renderItems() {
    if (this.state.items.length === 0) return <p>You have no items in your backpack!</p>;

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
            { this.state.items.length >0 && <h1>Your backpack weighs {this.state.items.length} pounds!</h1>}
            { this.renderItems()}
        </div>

    )
  }
}

export default Backpack;
