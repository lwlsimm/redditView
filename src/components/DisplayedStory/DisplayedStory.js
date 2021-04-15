import React, { useEffect } from 'react';
import { selectSelectaStory  } from '../../features/storySelectedSlice'
import { selectStories } from '../../features/storiesSlice'
import { useSelector, useDispatch } from "react-redux";
import './DisplayedStory.css'
import { selectDisplayAllStories } from '../../features/displayAllStoriesSlice';

export default function DisplayedStory () {

const stories = useSelector(selectStories);
const storyId = useSelector(selectSelectaStory);
const displayAllStories =  useSelector(selectDisplayAllStories);  
const story = stories[storyId];

  console.log(storyId)

  if(displayAllStories) {
    return (null)
  } 
  else {
    return (
      <div className="TopicDisplay">
        <div className="DisplayedStory">
          <h2>{story.headline}</h2>
          <p className="Bold">Find Out More</p>
          <p>Link to Reddit: <a href={story.permalink} rel="noreferrer" target="_blank">Click Here</a></p>
          <p>External Link: <a href={story.externalurl} rel="noreferrer" target="_blank">Click Here</a></p>
          <p>Reddit Comments: <a href={story.permalink} rel="noreferrer" target="_blank">{story.comments}</a></p>
          <p>Reddit Rating: <span className="Bold">{parseFloat(story.upvote_ration) * 100}%</span></p>
          <p></p>
        </div>
      </div>
    )
  }
  
}