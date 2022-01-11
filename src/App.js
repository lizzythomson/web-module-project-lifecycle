import React from 'react';
import axios from 'axios';
import User from './components/User';
import './App.css';

class App extends React.Component {
  state = {
    githubUser: null,
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
        console.log(resp);
      })
      .catch((err) => {
        console.log('Error: ', error);
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
          {this.state.githubUser === null ? (
            <h1>Loading...</h1>
          ) : (
            <div className='main-content'>
              <User githubUser={this.state.githubUser} />
              <div className='followers'>
                <h2>Followers</h2>
                <div className='follower'>
                  <img></img>
                  <p>Follower Name</p>
                </div>
                <div className='follower'>
                  <img></img>
                  <p>Follower Name</p>
                </div>
                <div className='follower'>
                  <img></img>
                  <p>Follower Name</p>
                </div>
                <div className='follower'>
                  <img></img>
                  <p>Follower Name</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
