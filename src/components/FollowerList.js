import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
  render() {
    return (
      <div className='followers-container'>
        <h2>Followers</h2>
        <div className='followers'>
          {this.props.followers.map((follower) => (
            <Follower key={follower.id} follower={follower} />
          ))}
        </div>
      </div>
    );
  }
}

export default FollowerList;
