import { ICategoryType, IMetaType } from '@/mocks/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ICategoryResponse {
  data: Array<ICategoryType>;
  meta: IMetaType;
}

interface IQuery {
  page?: number;
  pageSize?: number;
}

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  tagTypes: ['Categories'],
  endpoints: (builder) => ({
    getCategories: builder.query<ICategoryResponse, IQuery>({
      query: ({ pageSize, page }) => ({
        url: `categories?populate=*&sort=title:desc&pagination[page]=${page || 1}&pagination[pageSize]=${pageSize || 25}`,
      }),
      providesTags: ['Categories'],
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
