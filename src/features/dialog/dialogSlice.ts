import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IDialogToggle {
  show: boolean
}

const initialState: IDialogToggle = {
  show: false
}

export const dialogToggleSlice = createSlice({
  name: 'showDialog',
  initialState,
  reducers: {
    toggle: (state) => {
      console.log(state.show)
      state.show = !state.show
    }
  }
})

export const { toggle } = dialogToggleSlice.actions

export const dialogToggle = (state: RootState) => state.showDialog;

export default dialogToggleSlice.reducer;