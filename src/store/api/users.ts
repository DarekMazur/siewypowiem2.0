import { IMetaTypes, IUserTypes } from '@/utils/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IUserResponse {
  data: Array<IUserTypes>;
  meta: IMetaTypes;
}

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
    getUsers: builder.query<IUserResponse, IQuery>({
      query: ({ pageSize, page }) => ({
        url: `users?populate=*&sort=username:desc&pagination[page]=${page || 1}&pagination[pageSize]=${pageSize || 25}`,
      }),
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
