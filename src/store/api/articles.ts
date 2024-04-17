import { IArticleType, IMetaType } from '@/mocks/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IArticleResponse {
  data: Array<IArticleType>;
  meta: IMetaType;
}

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
  }),
  tagTypes: ['Articles'],
  endpoints: (builder) => ({
    getArticles: builder.query<IArticleResponse, void>({
      query: () => ({
        url: 'articles?populate=*&sort=publishedAt:desc',
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
