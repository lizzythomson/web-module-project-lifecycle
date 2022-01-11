import React from 'react';
import axios from 'axios';
import User from './components/User';
import FollowerList from './components/FollowerList';
import './App.css';

class App extends React.Component {
  state = {
    githubUser: null,
    followers: null,
    username: '',
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/lizzythomson`)
      .then((response) => {
        this.setState({ ...this.state, githubUser: response.data });
      })
      .catch((error) => {
        console.log('Error: ', error);
      });

    axios
      .get(`https://api.github.com/users/lizzythomson/followers`)
      .then((response) => {
        console.log('HiyA', response.data);
        this.setState({ ...this.state, followers: response.data });
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  }

  handleChange = (event) => {
    this.setState({ ...this.state, username: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((resp) => {
        this.setState({ ...this.state, githubUser: resp.data, username: '' });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });

    axios
      .get(`https://api.github.com/users/${username}/followers`)
      .then((resp) => {
        this.setState({ ...this.state, followers: resp.data });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  };

  render() {
    return (
      <div>
        <div className='header'>
          <h1>GitHub Info</h1>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.username} onChange={this.handleChange} />
            <button className='search-btn'>Search</button>
          </form>
          {this.state.githubUser === null || this.state.followers === null ? (
            <h1>Loading...</h1>
          ) : (
            <div className='main-content'>
              <User githubUser={this.state.githubUser} />
              <FollowerList followers={this.state.followers} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
