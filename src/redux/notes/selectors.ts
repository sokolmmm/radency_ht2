import { RootState } from '../store';

export const selectActiveTab = (state: RootState) => state.notes.activeTab;

export const selectNotes = (state: RootState) => state.notes.notes;
