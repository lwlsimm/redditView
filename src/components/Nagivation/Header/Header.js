import React from 'react';
import './Header.css';
import redditImage from './reddit.png'

const header = () => (
  <div className="Header">
    <div className="HeaderText">
      <h1>RedditView</h1>
      <p>All the most important news from Reddit!</p>
      <p>The internet's most realiable source!</p>
    </div>
    <div className="HeaderImg">
      <img alt="RedditIcon" src={redditImage}></img>
    </div>
    
  </div>
);

export default header;