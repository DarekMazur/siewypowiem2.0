'use client';

/* eslint-disable react/no-danger */
import { FC } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { IArticleTypes } from '@/utils/types';
import Image from 'next/image';
import { stringityArray } from '@/utils/stringifyArray';
import ArticleCategories from '@/components/Atoms/ArticleCategories/ArticleCategories';
import { MainWrapper } from '../PageView/PageView.styles';

interface IArticleViewProps {
  article: IArticleTypes;
  similar: Array<IArticleTypes>;
  next?: string;
  previous?: string;
}

const RelatedArticle = ({ realted }: { realted: IArticleTypes }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        padding: '1rem 0',
      }}
    >
      <Image
        src={realted.attributes.cover.data.attributes.url}
        alt={realted.attributes.title}
        width={160}
        height={100}
      />
      <div>
        <h4>
          <Link href={slugify(realted.attributes.title, { lower: true })}>
            {realted.attributes.title}
          </Link>
        </h4>
        <ArticleCategories
          categories={stringityArray(realted.attributes.categories.data)}
        />
      </div>
    </div>
  );
};

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
        {similar.length > 0 ? (
          <aside style={{ width: '25%' }}>
            <h3>See also:</h3>
            {similar.map((similarArticle) => (
              <RelatedArticle realted={similarArticle} />
            ))}
          </aside>
        ) : null}
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
