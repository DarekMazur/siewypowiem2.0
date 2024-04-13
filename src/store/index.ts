import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from './api/articles';

export type RootState = ReturnType<typeof store.getState>;

export * from './api/articles';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
});
