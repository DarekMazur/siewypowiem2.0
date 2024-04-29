'use client';

/* eslint-disable react/no-danger */
import { FC } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { IArticleTypes } from '@/utils/types';
import { MainWrapper } from '../PageView/PageView.styles';

interface IArticleViewProps {
  article: IArticleTypes;
  next?: string;
  previous?: string;
}

const ArticleView: FC<IArticleViewProps> = ({ article, next, previous }) => {
  return (
    <MainWrapper>
      <section dangerouslySetInnerHTML={{ __html: article.attributes.body }} />
      <section>
        {previous ? (
          <Link href={`/article/${slugify(previous, { lower: true })}`}>
            <button type='button'>Previous: {previous}</button>
          </Link>
        ) : null}

        {next ? (
          <Link href={`/article/${slugify(next, { lower: true })}`}>
            <button type='button'>Next: {next}</button>
          </Link>
        ) : null}
      </section>
    </MainWrapper>
  );
};

export default ArticleView;
