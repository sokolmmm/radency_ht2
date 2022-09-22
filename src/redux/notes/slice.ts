import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { EnumTabs, INotesState } from './interfaces';

const initialState: INotesState = {
  notes: [],
  activeTab: EnumTabs.ACTIVE,
};

export const notesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setActiveTab: (state: INotesState, action: PayloadAction<EnumTabs>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = notesSlice.actions;

export default notesSlice.reducer;
