import { IInstaTypes } from '@/utils/data/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IInstaResponse {
  data: Array<IInstaTypes>;
}

export const instagramApi = createApi({
  reducerPath: 'instagramApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://graph.instagram.com/${process.env.NEXT_PUBLIC_IG_USER}/media`,
  }),
  tagTypes: ['Instagram'],
  endpoints: (builder) => ({
    getInsta: builder.query<IInstaResponse, void>({
      query: () => ({
        url: `?fields=${process.env.NEXT_PUBLIC_IG_FIELDS}&access_token=${process.env.NEXT_PUBLIC_IG_KEY}`,
      }),
      providesTags: ['Instagram'],
    }),
  }),
});

export const { useGetInstaQuery } = instagramApi;
