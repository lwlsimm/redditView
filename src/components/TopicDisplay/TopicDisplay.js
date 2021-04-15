import React from 'react';
import { selectStories } from '../../features/storiesSlice';
import { selectDisplayAllStories } from '../../features/displayAllStoriesSlice';
import { useSelector } from "react-redux";
import Card from '../Card/Card';
import DisplayedStory from '../DisplayedStory/DisplayedStory';

export default function TopicDisplay () {

  const displayAllStories = useSelector(selectDisplayAllStories);
  const stories = useSelector(selectStories);
  const cardIds = []
  Object.entries(stories).forEach((value) => 
    cardIds.push(value[1].id)
  );

  if (displayAllStories) {
  return (
    <div className="TopicDisplay">
      {cardIds.map((value) => (
        <Card key={value} id={value}/>
      ))}
    </div>
    )
  } else {
    return (
      <DisplayedStory className="TopicDisplay"/>
    )
  }

  
}