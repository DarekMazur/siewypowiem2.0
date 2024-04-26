import { ICategoryTypes, IMetaTypes } from '@/utils/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface ICategoryResponse {
  data: { data: Array<ICategoryTypes> };
  meta: IMetaTypes;
}

interface IQuery {
  page?: number;
  pageSize?: number;
}

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
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
