import React from 'react';

class User extends React.Component {
  render() {
    const { avatar_url, name, login, followers, public_repos } =
      this.props.githubUser;
    return (
      <div className='github-account'>
        <img width='350' src={avatar_url}></img>
        <div className='github-info'>
          <h2>{name}</h2>
          <p>({login})</p>
          <h3>Total Repos: {public_repos}</h3>
          <h3>Total Followers: {followers}</h3>
        </div>
      </div>
    );
  }
}

export default User;
