import ArticleCategories from '@/components/Atoms/ArticleCategories/ArticleCategories';
import Likes from '@/components/Atoms/Likes/Likes';
import { ICategoryType } from '@/mocks/types';
import { FC } from 'react';
import { StyledArticleShortHeader } from './ArticleShortHeader.styles';

interface IArticleShortHeaderProps {
  categories: Array<ICategoryType>;
  likes: number;
}

const ArticleShortHeader: FC<IArticleShortHeaderProps> = ({
  categories,
  likes,
}) => {
  const stringityArray = (list: Array<ICategoryType>) => {
    const stringify: Array<string> = [];

    list.forEach((listItem) => stringify.push(listItem.attributes.title));

    return stringify.join(', ');
  };

  return (
    <StyledArticleShortHeader $isSpace={categories.length > 0}>
      <ArticleCategories categories={stringityArray(categories)} />
      <Likes count={likes} />
    </StyledArticleShortHeader>
  );
};

export default ArticleShortHeader;
