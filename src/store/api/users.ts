import { IUserTypes } from '@/utils/data/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IQuery {
  page?: number;
  pageSize?: number;
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/api/`,
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<Array<IUserTypes>, IQuery>({
      query: () => ({
        url: `users?populate=*&sort=username:desc`,
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        },
      }),
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
