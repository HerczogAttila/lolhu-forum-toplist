import React, { Component } from 'react';
import './App.css';
import axios from './axios';

class App extends Component {
  state = {
    users: null,
    sortBy: 'commentCount',
    sortDirection: 1
  };

  componentDidMount() {
    const url = '/users.json';
    axios.get(url)
      .then(response => {
        this.setState({ users: response.data });
      }).catch(error => console.log(error));
  }

  changeSortHandler = (event) => {
    if (this.state.sortBy === event) {
      const direction = this.state.sortDirection;
      this.setState({ sortDirection: direction * -1 });
    } else {
      this.setState({ sortBy: event });
    }
  };

  render() {
    let usersTable = null;
    if (this.state.users) {
      const userNames = Object.keys(this.state.users);
      let users = [];
      userNames.forEach(userName => {
        users.push({ ...this.state.users[userName], userName: userName });
      });
      users.sort((a, b) => (b[this.state.sortBy] - a[this.state.sortBy]) * this.state.sortDirection)
      const tableRows = users.map(user => {
        return <tr key={user.userName}>
          <td>{user.userName}</td>
          <td>{user.commentCount}</td>
          <td>{user.upvote}</td>
          <td>{user.averageUpvote ? user.averageUpvote.toFixed(2) : 0}</td>
        </tr>;
      });

      usersTable = <table>
        <thead>
          <tr>
            <th>Name</th>
            <th onClick={() => this.changeSortHandler('commentCount')} className={this.state.sortBy === 'commentCount' ? this.state.sortDirection === 1 ? 'asc pointer' : 'desc pointer' : 'pointer'}>Comment</th>
            <th onClick={() => this.changeSortHandler('upvote')} className={this.state.sortBy === 'upvote' ? this.state.sortDirection === 1 ? 'asc pointer' : 'desc pointer' : 'pointer'}>Upvote</th>
            <th onClick={() => this.changeSortHandler('averageUpvote')} className={this.state.sortBy === 'averageUpvote' ? this.state.sortDirection === 1 ? 'asc pointer' : 'desc pointer' : 'pointer'}>Average upvote/Comment</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>;
    }

    return (
      <div className="App">
        {usersTable}
      </div>
    );
  }
}

export default App;
