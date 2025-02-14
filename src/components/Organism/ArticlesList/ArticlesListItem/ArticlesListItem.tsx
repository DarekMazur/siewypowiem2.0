import ArticleThumb from '@/components/Atoms/ArticleThumb/ArticleThumb';
import ArticleTitle from '@/components/Atoms/AtricleTitle/ArticleTitle';
import { useState } from 'react';
import Link from 'next/link';
import slugify from 'slugify';
import { getReadingTime } from '@/utils/methods/getReadingTime';
import ArticleCta from '@/components/Atoms/ArticleCta/ArticleCta';
import ArticleShortHeader from '@/components/Molecules/ArticleShortHeader/ArticleShortHeader';
import { ArticleAuthor } from '@/components/Atoms/ArticleAuthor/ArticelAuthor.styles';
import { dateFormat } from '@/utils/methods/dateFormat';
import { stringityArray } from '@/utils/methods/stringifyArray';
import ArticleCategories from '@/components/Atoms/ArticleCategories/ArticleCategories';
import { IArticleTypes } from '@/utils/data/types';
import defaultCover from '@/assets/dafault.jpg';
import {
  ArticleContentWrapper,
  ArticleDetails,
  ArticleListItemWrapper,
} from './ArticlesListItem.styles';

const ArticlesListItem = ({
  article,
  height,
}: {
  article: IArticleTypes;
  height?: number;
}) => {
  const [isOver, setIsOver] = useState(false);

  const spliceParagraph = (paragraph: string) => {
    const stringToArray = paragraph.split(' ');

    if (stringToArray.length > 25) {
      return `${stringToArray.slice(0, 25).join(' ')}[...]`;
    }

    return paragraph;
  };

  const handleMouseEnter = () => {
    setIsOver(true);
  };

  const handleMouseLeave = () => {
    setIsOver(false);
  };

  return (
    <ArticleListItemWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      $height={height}
    >
      <Link
        href={`/article/${slugify(article.attributes.title, { lower: true })}`}
      >
        <ArticleThumb
          name={
            article.attributes.cover.data
              ? article.attributes.cover.data.attributes.name
              : article.attributes.title
          }
          url={
            article.attributes.cover.data
              ? article.attributes.cover.data.attributes.url
              : defaultCover.src
          }
        />
        <ArticleContentWrapper $isHidden={isOver}>
          <div>
            <ArticleTitle title={article.attributes.title} size={40} />
            <p>
              <i>
                Przeczytasz w{' '}
                <strong>
                  {getReadingTime(article.attributes.body)}{' '}
                  {getReadingTime(article.attributes.body) === 1
                    ? 'minutę'
                    : getReadingTime(article.attributes.body) < 5
                      ? 'minuty'
                      : 'minut'}
                </strong>
              </i>
            </p>
            <ArticleShortHeader
              likes={article.attributes.likes}
              date={dateFormat(article.attributes.publishedAt)}
            />
            <ArticleCategories
              categories={stringityArray(article.attributes.categories.data)}
            />
          </div>
          <ArticleDetails $isVisible={isOver}>
            <p>
              {article.attributes.description ||
                spliceParagraph(article.attributes.body)}
            </p>
            <ArticleAuthor>
              by {article.attributes.author.data.attributes.username}
            </ArticleAuthor>
            <ArticleCta call='Zobacz więcej' />
          </ArticleDetails>
        </ArticleContentWrapper>
      </Link>
    </ArticleListItemWrapper>
  );
};

export default ArticlesListItem;
