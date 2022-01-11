import React from 'react';
import Follower from './Follower';

class FollowerList extends React.Component {
  render() {
    return (
      <div className='followers'>
        <h2>Followers</h2>
        {this.props.followers.map((follower) => (
          <Follower key={follower.id} follower={follower} />
        ))}
      </div>
    );
  }
}

export default FollowerList;
