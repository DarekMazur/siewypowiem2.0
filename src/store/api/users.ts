import { IMetaType, IUserType } from '@/mocks/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IUserResponse {
  data: Array<IUserType>;
  meta: IMetaType;
}

interface IQuery {
  page?: number;
  pageSize?: number;
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/api/',
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
