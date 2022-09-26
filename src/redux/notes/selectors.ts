import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { EnumTabs, ISummaryByCategories } from './interfaces';

export const selectActiveTab = (state: RootState) => state.notes.activeTab;

export const selectAllNotes = (state: RootState) => state.notes.notes;

export const selectAllCategories = (state: RootState) => state.notes.categories;

export const selectCurrentNoteId = (state: RootState) => state.notes.currentNoteId;

export const selectNotesByActiveTabs = createSelector(
  [selectAllNotes, selectActiveTab],
  (allNotes, activeTab) => {
    if (activeTab === EnumTabs.ACTIVE) {
      return allNotes.filter((el) => el.isActive);
    }

    return allNotes.filter((el) => !el.isActive);
  },
);

export const selectSummaryByCategories = createSelector(
  [selectAllNotes, selectAllCategories],
  (allNotes, allCategories) => {
    const result: ISummaryByCategories[] = allCategories.map((category) => {
      const activeSummaryByCategory = allNotes
        .filter((item) => item.category === category && item.isActive)
        .length.toString();

      const archivedSummaryByCategory = allNotes
        .filter((item) => item.category === category && !item.isActive)
        .length.toString();

      return {
        category,
        active: activeSummaryByCategory,
        archived: archivedSummaryByCategory,
      };
    });
    return result;
  },
);

export const selectNewNoteId = createSelector([selectAllNotes], (allNotes) => {
  if (allNotes.length > 0) {
    const lastId = allNotes[allNotes.length - 1].id;
    return lastId + 1;
  }
  return 1;
});

export const selectCurrentNote = createSelector(
  [selectAllNotes, selectCurrentNoteId],
  (allNotes, currentNoteId) => allNotes.find((el) => el.id === currentNoteId),
);
