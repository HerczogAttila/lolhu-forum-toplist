import React, { Component } from 'react';
import axios from 'axios';

class Messages extends Component {
  state = {
    name: '',
    data: null
  };

  componentDidMount() {
    const url = 'https://boards.eune.leagueoflegends.com/hu/player/eune/' + this.state.name + '?json_wrap=true';
    axios.get(url)
      .then(response => {
        console.log(response.data);
        this.setState({ data: response.data });
      }).catch(error => console.log(error));
  }

  nameChangedHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.data}
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.nameChangedHandler} />
      </div>
    );
  }
}

export default Messages;
