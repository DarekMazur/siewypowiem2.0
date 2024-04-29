'use client';

/* eslint-disable react/no-danger */
import { FC } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { IArticleTypes } from '@/utils/types';
import Image from 'next/image';
import { MainWrapper } from '../PageView/PageView.styles';

interface IArticleViewProps {
  article: IArticleTypes;
  similar: Array<IArticleTypes>;
  next?: string;
  previous?: string;
}

const ArticleView: FC<IArticleViewProps> = ({
  article,
  similar,
  next,
  previous,
}) => {
  return (
    <MainWrapper>
      <section style={{ display: 'flex', gap: '2rem' }}>
        <div
          style={{ width: '75%' }}
          dangerouslySetInnerHTML={{ __html: article.attributes.body }}
        />
        <aside style={{ width: '25%' }}>
          <h3>See also:</h3>
          {similar.map((similarArticle) => (
            <Link
              href={slugify(similarArticle.attributes.title, { lower: true })}
            >
              <h4>{similarArticle.attributes.title}</h4>
              <Image
                src={similarArticle.attributes.cover.data.attributes.url}
                alt={similarArticle.attributes.title}
                width={160}
                height={120}
              />
            </Link>
          ))}
        </aside>
      </section>
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
