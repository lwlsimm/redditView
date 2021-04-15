import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayAllStories: true,
}


export const displayAllStoriesSlice = createSlice({
  name: 'displayAllStories',
  initialState,
  reducers: {
    toggleDisplay: (state, action) => {
      state.displayAllStories = action.payload
    } 
  }
})



export const selectDisplayAllStories = (state) => state.displayAllStories.displayAllStories;


export const { toggleDisplay } = displayAllStoriesSlice.actions;

export default displayAllStoriesSlice.reducer;