import { configureStore } from '@reduxjs/toolkit';
import { articlesApi } from './api/articles';
import { instagramApi } from './api/insta';
import { categoriesApi } from './api/categories';
import { usersApi } from './api/users';

export type RootState = ReturnType<typeof store.getState>;

export * from './api/articles';
export * from './api/categories';
export * from './api/users';
export * from './api/insta';

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [instagramApi.reducerPath]: instagramApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(usersApi.middleware)
      .concat(instagramApi.middleware)
      .concat(categoriesApi.middleware),
});
