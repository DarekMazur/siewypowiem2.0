/* eslint-disable @next/next/no-img-element */
import { IArticleType, ICategoryType } from '@/mocks/types';
import Link from 'next/link';
import Likes from '@/components/Atoms/Likes/Likes';
import { Handwritting } from '@/components/Atoms/Handwritting/Handwritting.styles';
import ArticleThumb from '@/components/Atoms/ArticleThumb/ArticleThumb';
import ArticleTitle from '@/components/Atoms/AtricleTitle/ArticleTitle';
import { StyledLink } from '@/components/Atoms/Link/Link.styles';
import { StyledArticlesListItem } from './ArticlesListItem.styles';

const ArticlesListItem = ({ article }: { article: IArticleType }) => {
  const stringityArray = (list: Array<ICategoryType>) => {
    const stringify: Array<string> = [];

    list.forEach((listItem) => stringify.push(listItem.attributes.title));

    return stringify.join(', ');
  };

  const spliceParagraph = (paragraph: string) => {
    const stringToArray = paragraph.split(' ');

    if (stringToArray.length > 20) {
      return `${stringToArray.slice(0, 25).join(' ')}[...]`;
    }

    return paragraph;
  };

  return (
    <StyledArticlesListItem>
      <div>
        <p>{stringityArray(article.attributes.categories)}</p>
        <Likes count={article.attributes.likes} />
      </div>
      <StyledLink href='/' $color='blue'>
        <ArticleTitle title={article.attributes.title} />
      </StyledLink>
      <ArticleThumb
        name={article.attributes.cover.data.attributes.name}
        url={article.attributes.cover.data.attributes.url}
      />
      <p>
        {article.attributes.description ||
          spliceParagraph(article.attributes.body)}
      </p>
      <Handwritting>by {article.attributes.author.username}</Handwritting>
      <Link href='/'>Read more</Link>
    </StyledArticlesListItem>
  );
};

export default ArticlesListItem;
