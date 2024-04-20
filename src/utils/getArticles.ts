'use client';

import { IArticleType, IMetaType } from '@/mocks/types';

interface IArticleResponse {
  data: Array<IArticleType>;
  meta: IMetaType;
}

export const getArticles = async (pageNumber: number, pageSize: number) => {
  try {
    const url = `http://localhost:3000/api/articles?populate=*&sort=publishedAt:desc&pagination[page]=${pageNumber}&pagination[pageSize]=${pageSize}`;
    const response = await fetch(url);
    const data = (await response.json()) as IArticleResponse;
    return data.data;
  } catch (error: unknown) {
    throw new Error(`An error happened: ${error}`);
  }
};
