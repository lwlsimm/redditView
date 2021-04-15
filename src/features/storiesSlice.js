import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stories: {},
  errorOccured: false,
}


export const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    addStories: (state, action) => {
      state.stories = action.payload; 
      }
    }
})


export const selectStories = (state) => state.stories.stories;
export const selectErrorOccured = (state) => state.errorOccured;

export const { addStories } = storiesSlice.actions;

export default storiesSlice.reducer;