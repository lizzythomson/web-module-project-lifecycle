import React from 'react';

class Follower extends React.Component {
  render() {
    return (
      <div className='follower'>
        <img width='200' src={this.props.follower.avatar_url}></img>
        <p>{this.props.follower.login}</p>
      </div>
    );
  }
}

export default Follower;
