import { RootState } from '../store';
import { EnumTabs } from './interfaces';

export const selectActiveTab = (state: RootState) => state.notes.activeTab;

export const selectNotes = (state: RootState) => state.notes.notes;

export const selectActiveTabsNotes = (state: RootState) => {
  if (state.notes.activeTab === EnumTabs.ACTIVE) {
    return state.notes.notes.filter((el) => el.isActive);
  }
  return state.notes.notes.filter((el) => !el.isActive);
};
