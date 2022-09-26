import { configureStore } from '@reduxjs/toolkit';

import notes from './notes/slice';

export const store = configureStore({
  reducer: { notes },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
