'use client';

import { IArticleTypes } from '@/utils/types';

const ArticleView = ({ article }: { article: IArticleTypes }) => {
  return (
    <main>
      <h2>{article.attributes.title}</h2>
      <p>{article.attributes.body}</p>
    </main>
  );
};

export default ArticleView;
