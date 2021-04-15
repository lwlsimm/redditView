import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  storySelected: {
    headline: 'Oops!'
  },
}


export const storySelectedSlice = createSlice({
  name: 'storySelect',
  initialState,
  reducers: {
    selectaStory: (state, action) => {
      state.storySelected = action.payload
    } 
  }
})



export const selectSelectaStory = (state) => state.storySelected.storySelected;


export const { selectaStory } = storySelectedSlice.actions;

export default storySelectedSlice.reducer;