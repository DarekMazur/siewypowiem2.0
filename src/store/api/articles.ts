import { IArticleType, IMetaType } from '@/mocks/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IArticleResponse {
  data: Array<IArticleType>;
  meta: IMetaType;
}

interface IQuery {
  page?: number;
  pageSize?: number;
  sort?: string;
  sortDir?: 'asc' | 'desc';
}

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  tagTypes: ['Articles'],
  endpoints: (builder) => ({
    getArticles: builder.query<IArticleResponse, IQuery>({
      query: ({ pageSize, page, sort, sortDir }) => ({
        url: `articles?populate=*&sort=${sort || 'publishedAt'}:${sortDir || 'desc'}&pagination[page]=${page || 1}&pagination[pageSize]=${pageSize || 25}`,
      }),
      providesTags: ['Articles'],
    }),
    getLastArticle: builder.query<IArticleResponse, void>({
      query: () => ({
        url: 'articles?populate=*&sort=publishedAt:desc&pagination[pageSize]=1',
      }),
      providesTags: ['Articles'],
    }),
  }),
});

export const { useGetLastArticleQuery, useGetArticlesQuery } = articlesApi;
