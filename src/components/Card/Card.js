import React from 'react';
import './Card.css'
import { selectStories } from '../../features/storiesSlice';
import { useSelector, useDispatch } from "react-redux";
import { toggleDisplay } from '../../features/displayAllStoriesSlice';
import { selectaStory } from '../../features/storySelectedSlice';

export default function Card (props) {
  const stories = useSelector(selectStories);
  const storyId = props.id;
  const dispatch = useDispatch();

  async function handleClick (e) {
    if(e.target.id == "") {
      console.log('Error retirving story - story id blank.')
    } else {
      const storyId = await e.target.id;
      await dispatch(selectaStory(storyId))
      await dispatch(toggleDisplay(false))
    }
      

  }

  return (
    <div onClick={(e)=> handleClick(e)} className="Card" key={storyId}>
      <h4 id={storyId}>{stories[storyId].headline}</h4>
    </div>
  )
}