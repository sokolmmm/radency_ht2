import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { EnumTabs, INotesState } from './interfaces';

const initialState: INotesState = {
  notes: [
    {
      id: '4b003292-8f21-4b6b-82ff-289691eb624b',
      name: 'Shopping list',
      created: '10/05/2022',
      category: 'Task',
      content: 'Tomatoes, bread',
      dates: '',
      isActive: true,
    },
    {
      id: '4b003292-8f21-4b6b-82ff-289691eb62422',
      name: 'Fly to Mars ',
      created: '20/05/2022',
      category: 'Random thought',
      content: 'I think I need to fly to Mars ',
      dates: '',
      isActive: true,
    },
  ],
  activeTab: EnumTabs.ACTIVE,
};

export const notesSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setActiveTab: (state: INotesState, action: PayloadAction<EnumTabs>) => {
      state.activeTab = action.payload;
    },
    deleteNotes: (state: INotesState) => {
      if (state.activeTab === EnumTabs.ACTIVE) {
        state.notes = state.notes.filter((el) => el.isActive === false);
      } else if (state.activeTab === EnumTabs.ARCHIVED) {
        state.notes = state.notes.filter((el) => el.isActive === true);
      }
    },
    toggleNotesStatus: (state: INotesState) => {
      const activeTab = state.activeTab === EnumTabs.ACTIVE;

      state.notes = state.notes.map((el) => {
        if (el.isActive === activeTab) {
          return { ...el, isActive: !activeTab };
        }
        return el;
      });
    },
    deleteNote: (state: INotesState, action: PayloadAction<string>) => {
      const noteIndex = state.notes.findIndex((el) => el.id === action.payload);
      state.notes.splice(noteIndex, 1);
    },
    toggleNoteStatus: (state: INotesState, action: PayloadAction<string>) => {
      const noteIndex = state.notes.findIndex((el) => el.id === action.payload);
      state.notes[noteIndex].isActive = !state.notes[noteIndex].isActive;
    },
  },
});

export const {
  setActiveTab, deleteNotes, toggleNotesStatus, deleteNote, toggleNoteStatus,
} = notesSlice.actions;

export default notesSlice.reducer;
