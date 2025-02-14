import { IArticleTypes, IMetaTypes } from '@/utils/data/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IArticleResponse {
  data: Array<IArticleTypes>;
  meta: IMetaTypes;
}

interface IQuery {
  page?: number;
  pageSize?: number;
  sort?: string;
  sortDir?: 'asc' | 'desc';
  categoryUuid?: string;
  authorUuid?: string;
  uuid?: string;
}

interface ISingleQuery {
  id: number;
}

interface IStickyQuery {
  categoryUuid?: string;
  authorUuid?: string;
}

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
  }),
  tagTypes: ['Articles'],
  endpoints: (builder) => ({
    getArticles: builder.query<IArticleResponse, IQuery>({
      query: ({
        pageSize,
        page,
        sort,
        sortDir,
        categoryUuid,
        authorUuid,
        uuid,
      }) => ({
        url: `articles?populate=*&sort=${sort || 'publishedAt'}:${sortDir || 'desc'}&pagination[page]=${page || 1}&pagination[pageSize]=${pageSize || 25}${categoryUuid ? `&filters[categories][uuid]=${categoryUuid}` : authorUuid ? `&filters[author][uuid]=${authorUuid}` : ''}${uuid ? `&filters[uuid]=${uuid}` : ''}`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }),
      providesTags: ['Articles'],
    }),
    getLastArticle: builder.query<IArticleResponse, void>({
      query: () => ({
        url: 'articles?populate=*&sort=publishedAt:desc&pagination[pageSize]=1',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }),
      providesTags: ['Articles'],
    }),
    getStickyArticles: builder.query<IArticleResponse, IStickyQuery>({
      query: ({ categoryUuid, authorUuid }) => ({
        url: `articles?populate=*&sort=publishedAt:desc&pagination[page]=1&pagination[pageSize]=25&filters[isSticky][$eq]=true${categoryUuid ? `&filters[categories][uuid]=${categoryUuid}` : authorUuid ? `&filters[author][uuid]=${authorUuid}` : ''}`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }),
      providesTags: ['Articles'],
    }),
    getSingleArticle: builder.query<IArticleResponse, ISingleQuery>({
      query: ({ id }) => ({
        url: `articles/${id}?populate=*`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }),
      providesTags: ['Articles'],
    }),
  }),
});

export const {
  useGetLastArticleQuery,
  useGetArticlesQuery,
  useGetStickyArticlesQuery,
  useGetSingleArticleQuery,
} = articlesApi;
