'use client';

import { IArticleTypes, IMetaTypes } from './types';

interface IArticleResponse {
  data: Array<IArticleTypes>;
  meta: IMetaTypes;
}

export const getArticles = async (
  pageNumber: number,
  pageSize: number,
  sort: string,
  sortDir: 'asc' | 'desc',
) => {
  try {
    const url = `http://localhost:3000/api/articles?populate=*&sort=${sort}:${sortDir}&pagination[page]=${pageNumber}&pagination[pageSize]=${pageSize}`;
    const response = await fetch(url);
    const data = (await response.json()) as IArticleResponse;
    return data.data;
  } catch (error: unknown) {
    throw new Error(`An error happened: ${error}`);
  }
};
