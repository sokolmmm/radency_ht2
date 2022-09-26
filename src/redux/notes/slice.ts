import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import {
  EnumCategories, EnumTabs, IEditTaskPayload, INote, INotesState,
} from './interfaces';

const initialState: INotesState = {
  notes: [
    {
      id: 1,
      name: 'Shopping list',
      created: '10/05/2022',
      category: 'Task',
      content: 'Tomatoes, bread',
      dates: '',
      isActive: false,
    },
    {
      id: 2,
      name: 'Fly to Mars ',
      created: '20/05/2022',
      category: 'Random thought',
      content: 'I think I need to fly to Mars ',
      dates: '',
      isActive: true,
    },
    {
      id: 3,
      name: 'New feature',
      created: '15/09/2022',
      category: 'Idea',
      content: 'Add validation to inputs',
      dates: '',
      isActive: false,
    },
    {
      id: 4,
      name: 'Home task 1',
      created: '10/09/2022',
      category: 'Task',
      content: 'Complete the task by 20-09-2022',
      dates: '20/09/2022',
      isActive: false,
    },
    {
      id: 5,
      name: 'Home task 2',
      created: '10/09/2022',
      category: 'Task',
      content: 'Complete the task by 25-09-2022',
      dates: '25/09/2022',
      isActive: true,
    },
    {
      id: 6,
      name: 'Home task 3',
      created: '10/09/2022',
      category: 'Task',
      content: 'Complete the task by 30-09-2022',
      dates: '30/09/2022',
      isActive: true,
    },
    {
      id: 7,
      name: 'Books',
      created: '10/02/2022',
      category: 'Task',
      content: 'The Lord of the Rings',
      dates: '',
      isActive: false,
    },
  ],
  activeTab: EnumTabs.ACTIVE,
  categories: [EnumCategories.IDEA, EnumCategories.RANDOM_THOUGHT, EnumCategories.TASK],
  currentNoteId: 0,
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
    deleteNote: (state: INotesState, action: PayloadAction<number>) => {
      const noteIndex = state.notes.findIndex((el) => el.id === action.payload);
      state.notes.splice(noteIndex, 1);
    },
    toggleNoteStatus: (state: INotesState, action: PayloadAction<number>) => {
      const noteIndex = state.notes.findIndex((el) => el.id === action.payload);
      state.notes[noteIndex].isActive = !state.notes[noteIndex].isActive;
    },
    setCurrentNoteId: (state: INotesState, action: PayloadAction<number>) => {
      state.currentNoteId = action.payload;
    },
    saveEditedNote: (state: INotesState, action: PayloadAction<IEditTaskPayload>) => {
      if (state.currentNoteId > 0) {
        const index = state.notes.findIndex((el) => el.id === action.payload.id);
        state.notes[index] = { ...state.notes[index], ...action.payload };
      }
      state.currentNoteId = 0;
    },
    saveCreatedNote: (state: INotesState, action: PayloadAction<INote>) => {
      state.notes.push(action.payload);
    },
  },
});

export const {
  setActiveTab,
  deleteNotes,
  toggleNotesStatus,
  deleteNote,
  toggleNoteStatus,
  setCurrentNoteId,
  saveEditedNote,
  saveCreatedNote,
} = notesSlice.actions;

export default notesSlice.reducer;
