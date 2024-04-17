import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from './api/articles';
import { instagramApi } from './api/insta';

export type RootState = ReturnType<typeof store.getState>;

export * from './api/articles';
export * from './api/insta';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [instagramApi.reducerPath]: instagramApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(instagramApi.middleware),
});
