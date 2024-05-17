import { configureStore, createSlice } from '@reduxjs/toolkit';
import { articlesApi } from './api/articles';
import { instagramApi } from './api/insta';
import { categoriesApi } from './api/categories';
import { usersApi } from './api/users';

export type RootState = ReturnType<typeof store.getState>;

const initialFilteredCategories: Array<number> = [];
const initialFilteredUsers: Array<string> = [];
const initialFilteredPinned: Array<string> = [];
const initialSortDiserction: string = 'desc';
const initialArchiveData = {
  title: '',
  category: '',
  author: '',
  cover: '',
  date: '',
};

const filteredCategoriesSlice = createSlice({
  name: 'filteredCategories',
  initialState: initialFilteredCategories,
  reducers: {
    modifyCategoriesFilters(_state, action) {
      return action.payload;
    },
  },
});

const filteredUsersSlice = createSlice({
  name: 'filteredUsers',
  initialState: initialFilteredUsers,
  reducers: {
    modifyUsesFilters(_state, action) {
      return action.payload;
    },
  },
});

const filteredPinnedSlice = createSlice({
  name: 'filteredPinned',
  initialState: initialFilteredPinned,
  reducers: {
    modifyPinnedFilters(_state, action) {
      return action.payload;
    },
  },
});

const sortValueSlice = createSlice({
  name: 'sortValue',
  initialState: 'publishedAt',
  reducers: {
    setSortValue(_state, action) {
      return action.payload;
    },
  },
});

const sortDirectionSlice = createSlice({
  name: 'sortDirection',
  initialState: initialSortDiserction,
  reducers: {
    setSortDirection(_state, action) {
      return action.payload;
    },
  },
});

const archiveHeroDataSlice = createSlice({
  name: 'archiveHero',
  initialState: initialArchiveData,
  reducers: {
    setArchiveHeroData(_state, action) {
      return action.payload;
    },
  },
});

export const { modifyCategoriesFilters } = filteredCategoriesSlice.actions;
export const { modifyUsesFilters } = filteredUsersSlice.actions;
export const { modifyPinnedFilters } = filteredPinnedSlice.actions;
export const { setSortValue } = sortValueSlice.actions;
export const { setSortDirection } = sortDirectionSlice.actions;
export const { setArchiveHeroData } = archiveHeroDataSlice.actions;

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
    filteredCategories: filteredCategoriesSlice.reducer,
    filteredUsers: filteredUsersSlice.reducer,
    filteredPinned: filteredPinnedSlice.reducer,
    sortValue: sortValueSlice.reducer,
    sortDirection: sortDirectionSlice.reducer,
    archiveHero: archiveHeroDataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(articlesApi.middleware)
      .concat(usersApi.middleware)
      .concat(instagramApi.middleware)
      .concat(categoriesApi.middleware),
});
