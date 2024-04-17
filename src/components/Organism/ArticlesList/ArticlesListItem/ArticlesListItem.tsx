import { IArticleType } from '@/mocks/types';
import ArticleThumb from '@/components/Atoms/ArticleThumb/ArticleThumb';
import ArticleTitle from '@/components/Atoms/AtricleTitle/ArticleTitle';
import { useState } from 'react';
import Link from 'next/link';
import ArticleCta from '@/components/Atoms/ArticleCta/ArticleCta';
import ArticleShortHeader from '@/components/Molecules/ArticleShortHeader/ArticleShortHeader';
import { ArticleAuthor } from '@/components/Atoms/ArticleAuthor/ArticelAuthor.styles';
import { ArticleListItemWrapper } from './ArticlesListItem.styles';

const ArticlesListItem = ({ article }: { article: IArticleType }) => {
  const [isOver, setIsOver] = useState(false);

  const spliceParagraph = (paragraph: string) => {
    const stringToArray = paragraph.split(' ');

    if (stringToArray.length > 20) {
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
    >
      <ArticleThumb
        name={article.attributes.cover.data.attributes.name}
        url={article.attributes.cover.data.attributes.url}
      />
      <div>
        <Link href='/'>
          <ArticleTitle title={article.attributes.title} />
          <ArticleShortHeader
            categories={article.attributes.categories}
            likes={article.attributes.likes}
          />
          <p>
            {article.attributes.description ||
              spliceParagraph(article.attributes.body)}
          </p>
          <ArticleAuthor>by {article.attributes.author.username}</ArticleAuthor>
          <ArticleCta call='Read more' isOver={isOver} />
        </Link>
      </div>
    </ArticleListItemWrapper>
  );
};

export default ArticlesListItem;
