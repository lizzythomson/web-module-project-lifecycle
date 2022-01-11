import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className='header'>
          <h1>GitHub Info</h1>
          <form>
            <input />
            <button className='search-btn'>Search</button>
          </form>
          <div className='main-content'>
            <div className='github-account'>
              <img></img>
              <h2>Name</h2>
              <p>github username</p>
              <h3>Total Repos</h3>
              <h3>Total Followers</h3>
            </div>
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
        </div>
      </div>
    );
  }
}

export default App;
