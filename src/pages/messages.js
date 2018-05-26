import React, { Component } from 'react';

class Messages extends Component {
  state = {
    name: ''
  };

  nameChangedHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.nameChangedHandler} />
      </div>
    );
  }
}

export default Messages;
