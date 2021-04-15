import { configureStore } from "@reduxjs/toolkit";
import storiesReducer from '../features/storiesSlice';
import displayAllStoriesReducer from '../features/displayAllStoriesSlice';
import storySelectedReducer from '../features/storySelectedSlice'

export default configureStore({
  reducer: {
    stories: storiesReducer,
    displayAllStories: displayAllStoriesReducer,
    storySelected: storySelectedReducer,
  }
});



