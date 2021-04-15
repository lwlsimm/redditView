import React, { useEffect } from 'react';
import './TopicDisplay.css';
import { useDispatch } from "react-redux";
import { addStories } from '../../features/storiesSlice';
import { toggleDisplay } from '../../features/displayAllStoriesSlice'


export default function TopicPicker() {
  const dispatch = useDispatch();

  async function handleClick (suffix) {
    await dispatch(toggleDisplay(true))
    const address = `https://www.reddit.com/r/${suffix}.json`
    const response = await fetch(address);
    const json = await response.json();
    const data = await json.data.children;
    const stories = await createStories(data);

    await dispatch(addStories(stories));
   
  }

  useEffect(()=> {
    handleClick('worldnews')
  },[])

  function createStories (stories) {
    const objectsToReturn = {}
    Object.entries(stories).forEach((value) => {
      const itemKey = value[1].data.name;
      const itemBody = {id:itemKey, headline: value[1].data.title, permalink: `https://www.reddit.com${value[1].data.permalink}`, externalurl: value[1].data.url_overridden_by_dest, upvote_ration: value[1].data.upvote_ratio, comments: value[1].data.num_comments};
      objectsToReturn[itemKey] = itemBody;
    })
    return objectsToReturn
  }

  return(
  <div className="TopicPicker">
    <h2>Topics:</h2>
    <h3 onClick={()=> handleClick('worldnews')}>World News</h3>
    <h3 onClick={()=> handleClick('unitedkingdom')}>UK News</h3>
    <h3 onClick={()=> handleClick('politics')}>Politics</h3>
    <h3 onClick={()=> handleClick('sports')}>Sports</h3>
  </div>
  )
  
}