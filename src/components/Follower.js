import React from 'react';

class Follower extends React.Component {
  render() {
    const { handleClick, follower } = this.props;

    return (
      <div
        className='follower'
        onClick={() => {
          // out own function
          // call the parent's handleClick
          handleClick(follower.login);
        }}
      >
        <img width='200' src={follower.avatar_url}></img>
        <p>{follower.login}</p>
      </div>
    );
  }
}

export default Follower;
