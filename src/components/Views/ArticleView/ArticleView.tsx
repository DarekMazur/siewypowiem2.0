'use client';

/* eslint-disable react/no-danger */
import { FC } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import RelatedArticle from '@/components/Molecules/RelatedArticle/RelatedArticle';
import { IArticleTypes } from '@/utils/types';
import { MainWrapper } from '../PageView/PageView.styles';
import {
  ArticlesNavigationWrapper,
  SingleArticleWrapper,
} from './ArticleView.styles';

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
      <SingleArticleWrapper $withAside={similar.length > 0}>
        <div dangerouslySetInnerHTML={{ __html: article.attributes.body }} />
        {similar.length > 0 ? (
          <aside style={{ width: '25%' }}>
            <h3>See also:</h3>
            {similar.map((similarArticle) => (
              <RelatedArticle realted={similarArticle} />
            ))}
          </aside>
        ) : null}
      </SingleArticleWrapper>
      <ArticlesNavigationWrapper $isOnlyNext={!!(next && !previous)}>
        {previous ? (
          <Link href={`/article/${slugify(previous, { lower: true })}`}>
            <button type='button'>
              <span>PREVIOUS</span>
              <span>{previous}</span>
            </button>
          </Link>
        ) : null}

        {next ? (
          <Link href={`/article/${slugify(next, { lower: true })}`}>
            <button type='button'>
              <span>NEXT</span>
              <span>{next}</span>
            </button>
          </Link>
        ) : null}
      </ArticlesNavigationWrapper>
    </MainWrapper>
  );
};

export default ArticleView;
