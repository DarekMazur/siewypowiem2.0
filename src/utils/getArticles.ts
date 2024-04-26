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
  categoryUuid?: string,
  authorUuid?: string,
) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=*&sort=${sort}:${sortDir}&pagination[page]=${pageNumber}&pagination[pageSize]=${pageSize}${categoryUuid ? `&filters[categories][uuid]=${categoryUuid}` : authorUuid ? `&filters[author][uuid]=${authorUuid}` : ''}`;
    const response = await fetch(url);
    const data = (await response.json()) as IArticleResponse;
    return data.data;
  } catch (error: unknown) {
    throw new Error(`An error happened: ${error}`);
  }
};
